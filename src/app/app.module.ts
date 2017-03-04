import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ReviewerDashboardComponent } from './reviewer-dashboard/reviewer-dashboard.component';
import { StudentAddSemesterComponent } from './student-add-semester/student-add-semester.component';
import { StudentAddModuleComponent } from './student-add-module/student-add-module.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    ReviewerDashboardComponent,
    StudentAddSemesterComponent,
    StudentAddModuleComponent
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
