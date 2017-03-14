import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    VerifiedReviewersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
