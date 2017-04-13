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


export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'student-sign-up', component: StudentSignUpComponent},
  {path: 'verified-reviewers', component: VerifiedReviewersComponent},
  {path: 'verify-reviewers', component: AdminVerifyReviewersComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'reviewer-signup', component: ReviewerSignUpComponent},
  {path: '**', component: PageNotFoundComponent}
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
