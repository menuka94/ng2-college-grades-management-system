import {Component, Input, OnInit} from '@angular/core';
import {Reviewer} from "../../models/Reviewer";
import {ReviewersService} from "../../services/reviewers.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-verified-reviewers',
  templateUrl: 'verified-reviewers.component.html',
  styleUrls: ['verified-reviewers.component.css']
})
export class VerifiedReviewersComponent implements OnInit {
  reviewers$: Observable<Reviewer[]>;
  reviewers: Reviewer[];
  verifiedReviewers: Reviewer[];

  constructor(private reviewersService: ReviewersService) { }

  ngOnInit() {
    this.reviewers$ = this.reviewersService.getAllReviewers();
    this.reviewers$.subscribe(
      reviewers => {
        this.reviewers = reviewers;
        this.verifiedReviewers = reviewers;
      }
    );
  }

}
