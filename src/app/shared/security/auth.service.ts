import {Injectable, OnChanges, SimpleChanges} from "@angular/core";
import {AuthInfo} from "./auth-info";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AngularFire, AngularFireAuth, FirebaseAuthState} from "angularfire2";
import {Router} from "@angular/router";
import {StudentsService} from "../../services/students.service";
import {ReviewersService} from "../../services/reviewers.service";
import {AdminService} from "../../services/admin.service";

@Injectable()
export class AuthService implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.studentsService.getAllStudents()
      .subscribe(students => {
        for(let student of students){
          this.studentIds.push(student.userId);
        }
      });

    this.reviewersService.getAllReviewers()
      .subscribe(reviewers => {
        for(let reviewer of reviewers){
          this.reviewerIds.push(reviewer.uid);
        }
      });

    this.adminService.getAllAdmins()
      .subscribe(admins => {
        for(let admin of admins){
          this.adminIds.push(admin.userId);
        }
      })
  }

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  studentIds: string[] = [];
  reviewerIds: string[] = [];
  adminIds: string[] = [];

  private currentUser: FirebaseAuthState;

  constructor(private auth: AngularFireAuth,
              private router: Router,
              private af: AngularFire,
              private studentsService: StudentsService,
              private reviewersService: ReviewersService,
              private adminService: AdminService){

    /*
    this.af.auth.subscribe(auth => {
      if(auth){
        const authInfo = new AuthInfo(auth.uid);
        this.authInfo$.next(authInfo);
      }else{
        this.authInfo$.next(AuthService.UNKNOWN_USER);
      }
    });
    */
  }


  getCurrentUser(): FirebaseAuthState{
    this.af.auth.subscribe(user => {
      if(user){
        // user logged in
        this.currentUser = user;
      }else{
        // user not logged in
        this.currentUser = null;
      }
    });

    return this.currentUser;
  }

  login(email, password): Observable<FirebaseAuthState>{
    return this.fromFirebaseAuthPromise(this.auth.login({email, password}));
  }

  signUp(email, password) {
    return this.fromFirebaseAuthPromise(this.auth.createUser({email, password}));
  }

  fromFirebaseAuthPromise(promise): Observable<any>{
    const subject = new Subject<any>();

    promise
      .then(res => {
        let authInfo;
        this.auth.subscribe(authState => {
          if(authState){
            authInfo = new AuthInfo(authState.uid);
            this.authInfo$.next(authInfo);
            subject.next(res);
            subject.complete();
          }
        });

      },
      err => {
        this.authInfo$.error(err);
        subject.error(err);
        subject.complete();
      });

    return subject;
  }

  logout(){
    console.log("logout()");
    this.auth.logout();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
    this.router.navigate(['/login']);
  }
}
