import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Feedback} from "../../models/Feedback";
import {FeedbackService} from "../../services/feedback.service";
import {ReviewersService} from "../../services/reviewers.service";
import {Observable} from "rxjs/Observable";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-reviewer-feedback-history',
  templateUrl: 'reviewer-feedback-history.component.html',
  styleUrls: ['reviewer-feedback-history.component.css']
})
export class ReviewerFeedbackHistoryComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  // this refers to the feedback history of the Student
  @Input('studentId') studentId: string;
  feedback$: Observable<Feedback[]>;
  feedback: Feedback[];
  feedbackReviewerExtras = {};
  feedbackStudentExtras = {};

  constructor(private feedbackService: FeedbackService,
              private reviewerService: ReviewersService,
              private studentsService: StudentsService) { }

  ngOnInit() {
    this.feedback$ = this.feedbackService.getFeedbackOfStudent(this.studentId);
    this.feedback$
      .subscribe(feedback => {
        this.feedback = feedback;
        console.log('Students Feedback: ', this.feedback);
        for(let single_feedback of feedback){
          this.reviewerService.getReviewerByUserId(single_feedback.reviewerId)
            .subscribe(reviewer => {
              console.log('Received Reviewer: ', reviewer);
              let name = reviewer.firstName + ' ' + reviewer.lastName;
              this.feedbackReviewerExtras[single_feedback.reviewerId + single_feedback.date] = name;
              // using 'reviewerId + date' as a unique identifier for the feedback object
              console.log('Reviewer: StudentsFeedbackHistory: ' +  this.feedbackReviewerExtras[single_feedback.reviewerId + single_feedback.date]);
            });

          this.studentsService.getStudentByUserId(single_feedback.studentId)
            .subscribe(student => {
              let name = student.firstName + ' ' + student.lastName;
              this.feedbackStudentExtras[single_feedback.reviewerId + single_feedback.date] = name;
            })
        }
      });
  }
}
