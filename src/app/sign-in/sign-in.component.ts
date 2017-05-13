import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/security/auth.service";
import {Router} from "@angular/router";
import {StudentsService} from "../services/students.service";
import {ReviewersService} from "../services/reviewers.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  loginForm: FormGroup;
  studentIds: string[] = [];
  reviewerIds: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private studentsService: StudentsService,
              private reviewersService: ReviewersService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });

    this.studentsService.getAllStudents().subscribe(
      data => {
        data.forEach(student => {
          this.studentIds.push(student.userId);
        });
      }
    );

    this.reviewersService.getAllReviewers().subscribe(
      data => {
        data.forEach(reviewer => {
          this.reviewerIds.push(reviewer.uid);
        });
      }
    );
  }

  login() {
    console.log(this.loginForm.value);
    const formValue = this.loginForm.value;

    this.authService.login(formValue.email, formValue.password)
      .subscribe(
        response => {
          alert("Successfully logged in");
          let uid = response.auth.uid;
          console.log(uid);

          if(this.studentIds.indexOf(uid) !== -1){
            // user is a student
            this.router.navigate(['student-dashboard']);
          }else if(this.reviewerIds.indexOf(uid) !== -1){
            // user is a reviewer
            this.router.navigate(['reviewer-dashboard']);
          }else{
            // user is an admin
            console.log('Admin Logged In');
          }
        },
        err => {
          // alert("Error: " + err);
          alert('Email and Password does not match!');
        }
      );
  }
}
