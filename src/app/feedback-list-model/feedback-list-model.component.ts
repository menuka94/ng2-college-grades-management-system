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
export class FeedbackListModelComponent implements OnInit {
  @Input('filteredFeedback') feedback: Feedback[];
  @Input('allFeedback$') feedback$: Observable<Feedback[]>;

  @Input('studentExtras') feedbackStudentExtras = {};
  @Input('reviewerExtras') feedbackReviewerExtras = {};

  @Input('showStudent') showStudent: boolean;
  @Input('showReviewer') showReviewer: boolean;

  constructor(private studentsService: StudentsService,
              private reviewersService: ReviewersService) { }

  ngOnInit() {

  }
}
