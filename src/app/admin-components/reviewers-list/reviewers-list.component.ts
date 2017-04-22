import {Component, Input, OnInit} from '@angular/core';
import {ReviewersService} from "../../services/reviewers.service";
import {Observable} from "rxjs/Observable";
import {Reviewer} from "../../models/Reviewer";

@Component({
  selector: 'app-reviewers-list',
  templateUrl: './reviewers-list.component.html',
  styleUrls: ['./reviewers-list.component.css']
})
export class ReviewersListComponent implements OnInit {

  @Input()
  filteredReviewers: Reviewer[];

  constructor(private reviewersService: ReviewersService) { }

  ngOnInit() {
  }
}
