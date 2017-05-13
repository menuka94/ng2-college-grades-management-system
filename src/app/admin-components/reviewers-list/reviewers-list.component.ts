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

  toggleApproval(reviewer) {
    if(confirm('Are you sure you want to confirm this Reviewer?')){
      this.reviewersService.toggleApproval(reviewer.uid, reviewer)
        .subscribe(
          obj => {
            if(reviewer.approved){
              alert("Reviewer Disproved!");
            }else{
              alert("Reviewer Approved!");
            }
          },
          err => {
            alert("Error: "+ err.toString());
          }
        );
    }
  }

}
