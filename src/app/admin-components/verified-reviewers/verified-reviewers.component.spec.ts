import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedReviewersComponent } from './verified-reviewers.component';
import {FeedbackListModelComponent} from "../../feedback-list-model/feedback-list-model.component";
import {ReviewersFeedbackComponent} from "../../reviewer-components/reviewers-feedback/reviewers-feedback.component";
import {NewFeedbackComponent} from "../../reviewer-components/new-feedback/new-feedback.component";
import {StudentsListComponent} from "../../reviewer-components/reviewer-all-students/students-list/students-list.component";
import {GeneralSignUpComponent} from "../../general-sign-up/general-sign-up.component";
import {LandingPageComponent} from "../../landing-page/landing-page.component";
import {NavbarComponent} from "../../navbar/navbar.component";
import {PageNotFoundComponent} from "../../page-not-found/page-not-found.component";
import {ReviewerFeedbackHistoryComponent} from "app/reviewer-components/reviewer-feedback-history/reviewer-feedback-history.component";
import {ReviewerReviewFormComponent} from "../../reviewer-components/reviewer-review-form/reviewer-review-form.component";
import {ReviewerSingleStudentComponent} from "app/reviewer-components/reviewer-single-student/reviewer-single-student.component";
import {ReviewerSearchStudentsComponent} from "../../reviewer-components/reviewer-search-students/reviewer-search-students.component";
import {SignInComponent} from "app/sign-in/sign-in.component";
import {ReviewerSignUpComponent} from "app/reviewer-components/reviewer-sign-up/reviewer-sign-up.component";
import {StudentSignUpComponent} from "../../student-components/student-sign-up/student-sign-up.component";
import {ViewStudentsComponent} from "../view-students/view-students.component";
import {StudentReceivedFeedbackComponent} from "../../student-components/student-received-feedback/student-received-feedback.component";
import {ReviewerAllStudentsComponent} from "../../reviewer-components/reviewer-all-students/reviewer-all-students.component";
import {StudentAddModuleComponent} from "../../student-components/student-add-module/student-add-module.component";
import {StudentAddSemesterComponent} from "../../student-components/student-add-semester/student-add-semester.component";
import {ReviewerDashboardComponent} from "../../reviewer-components/reviewer-dashboard/reviewer-dashboard.component";
import {AppComponent} from "app/app.component";
import {StudentDashboardComponent} from "../../student-components/student-dashboard/student-dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {AngularFire, AngularFireAuth, AngularFireModule} from "angularfire2";
import {AppRoutingModule} from "../../app-routing.module";
import {authConfig, firebaseConfig} from "../../../firebase.config";
import {StudentsService} from "app/services/students.service";
import {ReviewersService} from "app/services/reviewers.service";
import {ReviewerVerifiedGuard} from "../../shared/security/reviewer-verified.guard";
import {SemestersService} from "app/services/semesters.service";
import {AuthService} from "app/shared/security/auth.service";
import {AdminService} from "../../services/admin.service";
import {FeedbackService} from "app/services/feedback.service";
import {AuthGuard} from "../../shared/security/auth.guard";
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {AdminVerifyReviewersComponent} from "../admin-verify-reviewers/admin-verify-reviewers.component";


import {AllFeedbackComponent} from "../all-feedback/all-feedback.component";
import {ReviewersListComponent} from "../reviewers-list/reviewers-list.component";

fdescribe('VerifiedReviewersComponent', () => {
  let component: VerifiedReviewersComponent;
  let fixture: ComponentFixture<VerifiedReviewersComponent>;

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
    fixture = TestBed.createComponent(VerifiedReviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
