import { Component, OnInit } from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
import {Feedback} from "../../models/Feedback";
import {Observable} from "rxjs/Observable";
import {StudentsService} from "../../services/students.service";
import {ReviewersService} from "../../services/reviewers.service";

@Component({
  selector: 'app-all-feedback',
  templateUrl: './all-feedback.component.html',
  styleUrls: ['./all-feedback.component.css']
})
export class AllFeedbackComponent implements OnInit {
  feedback: Feedback[];
  allFeedback$: Observable<Feedback[]>;

  feedbackStudentExtras = {};
  feedbackReviewerExtras = {};


  constructor(private feedbackService: FeedbackService,
              private studentsService: StudentsService,
              private reviewersService: ReviewersService) { }

  ngOnInit() {
    this.allFeedback$ = this.feedbackService.getAllFeedback();
    this.allFeedback$
      .subscribe(
        results => {
          this.feedback = results;
          console.log('All Feedback: ', this.feedback);
          for(let single_feedback of this.feedback){
            this.studentsService.getStudentByUserId(single_feedback.studentId)
              .subscribe(student => {
                let name = student.firstName + ' ' + student.lastName;
                this.feedbackStudentExtras[single_feedback.reviewerId + single_feedback.date] = name;
                // using 'reviewerId + date' as a unique identifier for a feedback object
                console.log('Student: ', this.feedbackStudentExtras[single_feedback.reviewerId + single_feedback.date]);
              });

            this.reviewersService.getReviewerByUserId(single_feedback.reviewerId)
              .subscribe(reviewer => {
                let name = reviewer.firstName + ' ' + reviewer.lastName;
                this.feedbackReviewerExtras[single_feedback.studentId + single_feedback.reviewerId + single_feedback.date] = name;
                // using 'studentId + date' as a unique identifier for a feedback object
                console.log('Reviewer: ', this.feedbackReviewerExtras[single_feedback.studentId + single_feedback.reviewerId + single_feedback.date]);
              });

          }
        },
        err => {
          alert('Error receiving feedback: ' + err.toString());
        }
      );
  }
}
