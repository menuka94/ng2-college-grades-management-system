import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Feedback} from "../../models/Feedback";
import {AuthService} from "../../shared/security/auth.service";
import {FeedbackService} from "../../services/feedback.service";

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.css']
})
export class NewFeedbackComponent implements OnInit {
  form: FormGroup;

  @Input('studentId')
  studentId: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private feedbackService: FeedbackService) {
    this.form = fb.group({
      comment: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  reset(){
    this.form.reset();
  }

  get valid(){
    return this.form.valid;
  }

  get value(){
    return this.form.value;
  }

  saveFeedback(){
    const val = this.form.value;
    let comment: string = val.comment;
    let rating: string = val.rating;
    let studentId: string = this.studentId;
    let reviewerId: string = this.authService.getCurrentUser().uid;
    let date:string = new Date().toDateString();

    let feedback: Feedback = new Feedback(reviewerId, studentId, rating, comment, date, "");

    console.log("Feedback: before calling service: ", feedback);

    if(confirm("Are you sure you want to give this feedback?")){
      this.feedbackService.createNewFeedback(feedback);
      this.form.reset();
    }
  }
}
