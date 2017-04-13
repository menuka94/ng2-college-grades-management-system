import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/security/auth.service";
import {Router} from "@angular/router";
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private af: AngularFire) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  login(){
    console.log(this.loginForm.value);
    const formValue = this.loginForm.value;
    this.af.auth.login({email: formValue.email, password: formValue.password},
      {provider: AuthProviders.Password, method: AuthMethods.Password});

  }
}
