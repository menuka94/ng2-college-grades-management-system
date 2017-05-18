///<reference path="../admin-components/admin-verify-reviewers/admin-verify-reviewers.component.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFire, AngularFireAuth, AngularFireModule} from "angularfire2";
import {authConfig, firebaseConfig} from "../../firebase.config";
import {ReviewerVerifiedGuard} from "../shared/security/reviewer-verified.guard";
import {StudentsService} from "../services/students.service";
import {ReviewersService} from "../services/reviewers.service";
import {AdminService} from "../services/admin.service";
import {SemestersService} from "../services/semesters.service";
import {AuthGuard} from "app/shared/security/auth.guard";
import {AuthService} from "../shared/security/auth.service";
import {FeedbackService} from "../services/feedback.service";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FeedbackListModelComponent} from "../feedback-list-model/feedback-list-model.component";
import {ReviewersFeedbackComponent} from "../reviewer-components/reviewers-feedback/reviewers-feedback.component";
import {NewFeedbackComponent} from "../reviewer-components/new-feedback/new-feedback.component";
import {StudentsListComponent} from "app/reviewer-components/reviewer-all-students/students-list/students-list.component";
import {ReviewersListComponent} from "../admin-components/reviewers-list/reviewers-list.component";
import {GeneralSignUpComponent} from "../general-sign-up/general-sign-up.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {SignInComponent} from "../sign-in/sign-in.component";
import {ReviewerSignUpComponent} from "../reviewer-components/reviewer-sign-up/reviewer-sign-up.component";
import {StudentSignUpComponent} from "../student-components/student-sign-up/student-sign-up.component";
import {AppComponent} from "../app.component";
import {AllFeedbackComponent} from "../admin-components/all-feedback/all-feedback.component";
import {ReviewerFeedbackHistoryComponent} from "../reviewer-components/reviewer-feedback-history/reviewer-feedback-history.component";
import {ReviewerReviewFormComponent} from "../reviewer-components/reviewer-review-form/reviewer-review-form.component";
import {ReviewerSingleStudentComponent} from "app/reviewer-components/reviewer-single-student/reviewer-single-student.component";
import {ReviewerSearchStudentsComponent} from "../reviewer-components/reviewer-search-students/reviewer-search-students.component";
import {ViewStudentsComponent} from "app/admin-components/view-students/view-students.component";
import {VerifiedReviewersComponent} from "app/admin-components/verified-reviewers/verified-reviewers.component";
import {AdminVerifyReviewersComponent} from "../admin-components/admin-verify-reviewers/admin-verify-reviewers.component";
import {AdminDashboardComponent} from "../admin-components/admin-dashboard/admin-dashboard.component";
import {StudentReceivedFeedbackComponent} from "../student-components/student-received-feedback/student-received-feedback.component";
import {ReviewerAllStudentsComponent} from "../reviewer-components/reviewer-all-students/reviewer-all-students.component";
import {StudentAddModuleComponent} from "../student-components/student-add-module/student-add-module.component";
import {StudentDashboardComponent} from "../student-components/student-dashboard/student-dashboard.component";
import {ReviewerDashboardComponent} from "../reviewer-components/reviewer-dashboard/reviewer-dashboard.component";
import {StudentAddSemesterComponent} from "../student-components/student-add-semester/student-add-semester.component";

fdescribe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        GeneralSignUpComponent,
        StudentsListComponent,
        ReviewersListComponent,
        NewFeedbackComponent,
        ReviewersFeedbackComponent,
        FeedbackListModelComponent,
        AllFeedbackComponent,
      ],
      imports: [ BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig, authConfig),
      ],
      providers: [
        AngularFire,
        AngularFireAuth,
        ReviewerVerifiedGuard,
        StudentsService,
        ReviewersService,
        AdminService,
        SemestersService,
        AdminService,
        AuthService,
        AuthGuard,
        FeedbackService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should render 'Welcome' in an h2 tag`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome!');
  }));

  it(`should render 'College Grades Management System' in an h3 tag`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('College Grades Management System');
  }));
});
