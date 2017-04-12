import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css']
})
export class StudentSignUpComponent implements OnInit {
  studentSignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentSignUpForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      lastName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      gender: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      department: [null, Validators.required],
      indexNo: [null, [Validators.required, Validators.pattern(/^[0-9]{6}[a-z|A-Z]$/)]],
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  saveStudent(){
    console.log(this.studentSignUpForm.value);
  }
}
