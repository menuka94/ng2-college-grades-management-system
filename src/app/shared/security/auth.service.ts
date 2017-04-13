import {Injectable} from "@angular/core";
import {AuthInfo} from "./auth-info";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AngularFire, AngularFireAuth, FirebaseAuthState} from "angularfire2";
import {Router} from "@angular/router";

@Injectable()
export class AuthService{
  static UNKNOWN_USER = new AuthInfo(null);
  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
  private currentUser;

  constructor(private auth: AngularFireAuth, private router: Router, private af: AngularFire){

  }

  getCurrentUser(){
    this.af.auth.subscribe(user => {
      if(user){
        // user logged in
        this.currentUser = user;
      }else{
        // user not logged in
        this.currentUser = {};
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
        const authInfo = new AuthInfo(this.auth.getAuth().uid);
        this.authInfo$.next(authInfo);
        subject.next(res);
        subject.complete();
      },
      err => {
        this.authInfo$.error(err);
        subject.error(err);
        subject.complete();
      });

    return subject.asObservable();
  }

  logout(){
    console.log("logout()");
    this.auth.logout();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
    this.router.navigate(['/']);
  }
}
