import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-components/student-dashboard/student-dashboard.component';
import { ReviewerDashboardComponent } from './reviewer-components/reviewer-dashboard/reviewer-dashboard.component';
import { StudentAddSemesterComponent } from './student-components/student-add-semester/student-add-semester.component';
import { StudentAddModuleComponent } from './student-components/student-add-module/student-add-module.component';
import { ReviewerAllStudentsComponent } from './reviewer-components/reviewer-all-students/reviewer-all-students.component';
import { StudentReceivedFeedbackComponent } from './student-components/student-received-feedback/student-received-feedback.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { AdminVerifyReviewersComponent } from './admin-components/admin-verify-reviewers/admin-verify-reviewers.component';
import { ViewStudentsComponent } from './admin-components/view-students/view-students.component';
import { VerifiedReviewersComponent } from './admin-components/verified-reviewers/verified-reviewers.component';
import { StudentSignUpComponent } from './student-components/student-sign-up/student-sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReviewerSignUpComponent } from './reviewer-components/reviewer-sign-up/reviewer-sign-up.component';
import {MaterialModule, MaterialRootModule} from "@angular/material";

import 'hammerjs';
import { ReviewerSingleStudentComponent } from './reviewer-components/reviewer-single-student/reviewer-single-student.component';
import { ReviewerSearchStudentsComponent } from './reviewer-components/reviewer-search-students/reviewer-search-students.component';
import { ReviewerReviewFormComponent } from './reviewer-components/reviewer-review-form/reviewer-review-form.component';
import { ReviewerFeedbackHistoryComponent } from './reviewer-components/reviewer-feedback-history/reviewer-feedback-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CommonModule} from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import {AngularFireModule, AuthMethods, AuthProviders, FIREBASE_PROVIDERS, FirebaseAuthConfig} from "angularfire2";
import {authConfig, firebaseConfig} from "../firebase.config";
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AuthService} from "./shared/security/auth.service";
import {Router} from "@angular/router";
import {AuthGuard} from "./shared/security/auth.guard";
import * as firebase from "firebase/app";
import { GeneralSignUpComponent } from './general-sign-up/general-sign-up.component';
import AuthProvider = firebase.auth.AuthProvider;

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    ReviewerDashboardComponent,
    StudentAddSemesterComponent,
    StudentAddModuleComponent,
    ReviewerAllStudentsComponent,
    StudentReceivedFeedbackComponent,
    AdminDashboardComponent,
    AdminVerifyReviewersComponent,
    ViewStudentsComponent,
    VerifiedReviewersComponent,
    StudentSignUpComponent,
    SignInComponent,
    ReviewerSignUpComponent,
    ReviewerSingleStudentComponent,
    ReviewerSearchStudentsComponent,
    ReviewerReviewFormComponent,
    ReviewerFeedbackHistoryComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LandingPageComponent,
    GeneralSignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
