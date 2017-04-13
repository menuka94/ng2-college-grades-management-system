import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reviewer-sign-up',
  templateUrl: 'reviewer-sign-up.component.html',
  styleUrls: ['reviewer-sign-up.component.css']
})
export class ReviewerSignUpComponent implements OnInit {
  reviewerSignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reviewerSignUpForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      lastName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      gender: [null, [Validators.required]],
      employeeNo: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(9)]],
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  saveReviewer(){
    console.log(this.reviewerSignUpForm.value);
  }

}
