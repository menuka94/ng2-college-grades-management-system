import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class ReviewersFeedbackComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  reviewerId: string;

  feedback$: Observable<Feedback[]>;
  feedback: Feedback[];
  feedbackReviewerExtras = {};
  feedbackStudentExtras = {};

  constructor(private feedbackService: FeedbackService,
              private studentsService: StudentsService,
              private af: AngularFire) { }

  ngOnInit() {
    this.af.auth
      .subscribe(authState => {
        this.reviewerId = authState.uid;
      });
    this.feedback$ = this.feedbackService.getFeedbackOfReviewer(this.reviewerId);
    this.feedback$
      .subscribe(feedback => {
        this.feedback = feedback;
        for(let single_feedback of feedback){
          this.studentsService.getStudentByUserId(single_feedback.studentId)
            .subscribe(student => {
              console.log('Received Student: ', student);
              this.feedbackStudentExtras[single_feedback.key] = name;
            });
        }
      });
  }

}
