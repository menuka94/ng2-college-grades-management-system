import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Feedback} from "../../models/Feedback";
import {FeedbackService} from "../../services/feedback.service";
import {StudentsService} from "../../services/students.service";
import {AngularFire, AngularFireAuth} from "angularfire2";

@Component({
  selector: 'app-reviewers-feedback',
  templateUrl: './reviewers-feedback.component.html',
  styleUrls: ['./reviewers-feedback.component.css']
})
export class ReviewersFeedbackComponent implements OnInit {
  reviewerId: string;

  feedback$: Observable<Feedback[]>;
  feedback: Feedback[];
  feedbackReviewerExtras = {};
  feedbackStudentExtras = {};

  constructor(private feedbackService: FeedbackService,
              private studentsService: StudentsService,
              private af: AngularFire) { }

  ngOnInit() {
    this.reviewerId = this.af.auth.getAuth().uid;
    this.feedback$ = this.feedbackService.getFeedbackOfReviewer(this.reviewerId);
    this.feedback$
      .subscribe(feedback => {
        this.feedback = feedback;
        for(let single_feedback of feedback){
          this.studentsService.getStudentByUserId(single_feedback.studentId)
            .subscribe(student => {
              console.log('Received Reviewer: ', student);
              this.feedbackStudentExtras[single_feedback.studentId + single_feedback.reviewerId +single_feedback.date] = name;
              // using 'studentId + date' as a unique identifier for the feedback object
            });
        }
      });
  }

}
