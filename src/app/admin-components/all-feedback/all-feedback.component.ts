import { Component, OnInit } from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
import {Feedback} from "../../models/Feedback";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-all-feedback',
  templateUrl: './all-feedback.component.html',
  styleUrls: ['./all-feedback.component.css']
})
export class AllFeedbackComponent implements OnInit {
  feedback: Feedback[];
  feedbackObservable: Observable<Feedback[]>;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackObservable = this.feedbackService.getAllFeedback();
    this.feedbackObservable
      .subscribe(
        results => {
          this.feedback = results;
          console.log('All Feedback: ', this.feedback);
        },
        err => {
          alert('Error receiving feedback: ' + err.toString());
        }
      );
  }

}
