import { Component, OnInit } from '@angular/core';
import {AuthInfo} from "../../shared/security/auth-info";
import {AuthService} from "../../shared/security/auth.service";

@Component({
  selector: 'app-reviewer-dashboard',
  templateUrl: 'reviewer-dashboard.component.html',
  styleUrls: ['reviewer-dashboard.component.css']
})
export class ReviewerDashboardComponent implements OnInit {

  authInfo: AuthInfo;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);
    console.log("ReviewerDashBoard: Is Logged in: ", this.authInfo.isLoggedIn());
  }

}
