import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/security/auth.service';
import {Router} from '@angular/router';
import {Reviewer} from '../../models/Reviewer';
import {AngularFire, AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from 'firebase/app';
import Database = firebase.database.Database;
import {ReviewersService} from '../../services/reviewers.service';

@Component({
  selector: 'app-reviewer-sign-up',
  templateUrl: 'reviewer-sign-up.component.html',
  styleUrls: ['reviewer-sign-up.component.css']
})

export class ReviewerSignUpComponent implements OnInit {
  reviewerSignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private reviewersService: ReviewersService,
              private router: Router,
              private af: AngularFire) {

  }

  ngOnInit() {
    this.reviewerSignUpForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      lastName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      gender: [null, [Validators.required]],
      employeeNo: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(9)]],
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: [null, [Validators.required]]
    });
  }

  addNewReviewer(uid: string) {
    console.log('test 1');
    const firstName = this.reviewerSignUpForm.value.firstName;
    const lastName = this.reviewerSignUpForm.value.lastName;
    const gender = this.reviewerSignUpForm.value.gender;
    const employeeNo = this.reviewerSignUpForm.value.employeeNo;
    const email = this.reviewerSignUpForm.value.email;
    const reviewer: Reviewer = new Reviewer(firstName, lastName, gender, employeeNo, email, uid, false);

    this.reviewersService.createNewReviewer(uid, reviewer);
    console.log('test 2');
  }

  saveReviewer() {
    let uid = '';
    console.log(this.reviewerSignUpForm.value);

    const val = this.reviewerSignUpForm.value;
    this.authService.signUp(val.email, val.password)
      .subscribe(
        () => {
          alert('Reviewer Sign Up Successful');
          console.log('Reviewer Sign Up Successful');
          this.router.navigateByUrl('/reviewer-dashboard');
          uid = this.authService.getCurrentUser().uid.toString();
          this.addNewReviewer(uid);
        },
        err => {
          alert(err);
          console.log('Error in creating Reviewer', err.toString());
        }
      );

    console.log('End of saveReviewer()');
  }

  isPasswordMatch() {
    const val = this.reviewerSignUpForm.value;
    return val && val.password === val.confirmPassword;
  }

}
