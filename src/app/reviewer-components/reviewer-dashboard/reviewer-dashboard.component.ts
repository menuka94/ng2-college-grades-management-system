import { Component, OnInit } from '@angular/core';
import {AuthInfo} from "../../shared/security/auth-info";
import {AuthService} from "../../shared/security/auth.service";
import {ReviewersService} from "../../services/reviewers.service";

@Component({
  selector: 'app-reviewer-dashboard',
  templateUrl: 'reviewer-dashboard.component.html',
  styleUrls: ['reviewer-dashboard.component.css']
})
export class ReviewerDashboardComponent implements OnInit {
  isApproved: boolean;
  authInfo: AuthInfo;

  constructor(private authService: AuthService,
              private reviewersService: ReviewersService) { }

  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);

    let uid = this.authService.getCurrentUser().uid;
    this.reviewersService.getReviewerByUserId(uid)
      .subscribe(reviewer => {
        this.isApproved = reviewer.approved;
        console.log('isApproved: ' + reviewer.approved);
      });
  }
}
