import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {StudentSignUpComponent} from "./student-components/student-sign-up/student-sign-up.component";
import {VerifiedReviewersComponent} from "./admin-components/verified-reviewers/verified-reviewers.component";
import {AdminVerifyReviewersComponent} from "./admin-components/admin-verify-reviewers/admin-verify-reviewers.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AdminDashboardComponent} from "./admin-components/admin-dashboard/admin-dashboard.component";
import {ReviewerSignUpComponent} from "./reviewer-components/reviewer-sign-up/reviewer-sign-up.component";
import {ReviewerDashboardComponent} from "./reviewer-components/reviewer-dashboard/reviewer-dashboard.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {GeneralSignUpComponent} from "./general-sign-up/general-sign-up.component";
import {AuthGuard} from "./shared/security/auth.guard";
import {ReviewerAllStudentsComponent} from "./reviewer-components/reviewer-all-students/reviewer-all-students.component";
import {ReviewerSingleStudentComponent} from "./reviewer-components/reviewer-single-student/reviewer-single-student.component";


export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'register',
    component: GeneralSignUpComponent
  },
  {
    path: 'student-sign-up',
    component: StudentSignUpComponent,
  },
  {
    path: 'verified-reviewers',
    component: VerifiedReviewersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'verify-reviewers',
    component: AdminVerifyReviewersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'reviewer-sign-up',
    component: ReviewerSignUpComponent
  },
  {
    path: 'reviewer-dashboard',
    component: ReviewerDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'all-students',
    canActivate: [],
    children: [
      {
        path: '',
        component: ReviewerAllStudentsComponent
      },
      {
        path: ':studentId',
        component: ReviewerSingleStudentComponent
      }
    ]
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
