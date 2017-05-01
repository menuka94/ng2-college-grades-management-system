import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Feedback} from "../models/Feedback";
import {StudentsService} from "../services/students.service";
import {ReviewersService} from "../services/reviewers.service";
import {Student} from "../models/Student";
import {Reviewer} from "../models/Reviewer";
import {async} from "rxjs/scheduler/async";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list-model.component.html',
  styleUrls: ['./feedback-list-model.component.css']
})
export class FeedbackListModelComponent implements OnInit, OnChanges {
  @Input('filteredFeedback') feedback: Feedback[];
  @Input('feedbackObservable') feedback$: Observable<Feedback[]>;

  feedbackStudentExtras = {};
  feedbackReviewerExtras = {};

  constructor(private studentsService: StudentsService,
              private reviewersService: ReviewersService) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    if(this.feedback$){
      this.feedback$.subscribe(
        response => {
          console.log('Response', response);
          for(let single_feedback of this.feedback){
            this.studentsService.getStudentByUserId(single_feedback.studentId)
              .subscribe(student => {
                let firstName =  student.firstName;
                this.feedbackStudentExtras[single_feedback.reviewerId + single_feedback.date] = firstName;
                console.log('StudentFirstName: ', firstName);
              });
            this.reviewersService.getReviewerByUserId(single_feedback.reviewerId)
              .subscribe(reviewer => {
                let firstName =  reviewer.firstName;
                single_feedback[single_feedback.reviewerId + single_feedback.date] = reviewer.firstName;
                console.log('ReviewerFirstName: ', firstName);
              });
          }
        }
      );
    }

  }
}
