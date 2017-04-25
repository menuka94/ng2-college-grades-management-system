import {Component, Input, OnInit} from '@angular/core';
import {Reviewer} from "../../models/Reviewer";
import {ReviewersService} from "../../services/reviewers.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-admin-verify-reviewers',
  templateUrl: 'admin-verify-reviewers.component.html',
  styleUrls: ['admin-verify-reviewers.component.css']
})
export class AdminVerifyReviewersComponent implements OnInit {
  reviewers$: Observable<Reviewer[]>;
  reviewers: Reviewer[];
  reviewersToBeVerified: Reviewer[];

  constructor(private reviewersService: ReviewersService) { }

  ngOnInit() {
    this.reviewers$ = this.reviewersService.getAllReviewers();
    this.reviewers$.subscribe(
      reviewers => {
        this.reviewers = reviewers;
        this.reviewersToBeVerified = reviewers.filter(reviewer => !reviewer.approved);
      }
    );
  }

  filter(query: string){
    if(query){
      query = query.toLowerCase();
      this.reviewersToBeVerified = this.reviewers
        .filter(reviewer => (reviewer.firstName.toLowerCase().match(query) ||
                             reviewer.lastName.toLowerCase().match(query) ||
                             reviewer.employeeNo.toLowerCase().match(query) ||
                             reviewer.gender.toLowerCase().match(query)));
    }
  }


}
