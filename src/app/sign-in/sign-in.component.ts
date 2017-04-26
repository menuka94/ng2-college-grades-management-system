import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/security/auth.service";
import {Router} from "@angular/router";
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";
import {StudentsService} from "../services/students.service";
import {ReviewersService} from "../services/reviewers.service";
import {Student} from "../models/Student";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  studentIds: string[] = [];
  reviewerIds: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private af: AngularFire,
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
        console.log(this.studentIds);
      }
    );

    this.reviewersService.getAllReviewers().subscribe(
      data => {
        data.forEach(reviewer => {
          this.reviewerIds.push(reviewer.uid);
        });
        console.log(this.reviewerIds);
      }
    );
  }

  login() {
    console.log(this.loginForm.value);
    const formValue = this.loginForm.value;

    this.authService.login(formValue.email, formValue.password)
      .subscribe(
        response => {
          this.router.navigate(['reviewer-dashboard']);
          alert("Successfully logged in");
          let uid = response.auth.uid;
          console.log(uid);

          if(this.studentIds.indexOf(uid) !== -1){
            // user is a student
            console.log('Student Logged In');
          }else if(this.reviewerIds.indexOf(uid) !== -1){
            // user is a reviewer
            console.log('Reviewer Logged In');
          }else{
            // user is an admin
            console.log('Admin Logged In');
          }
        },
        err => {
          alert("Error: " + err);
        }
      );
  }
}
