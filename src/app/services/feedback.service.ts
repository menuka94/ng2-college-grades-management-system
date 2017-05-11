import {Inject, Injectable} from '@angular/core';
import {AngularFire, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Feedback} from "../models/Feedback";
import {Subject} from "rxjs/Subject";

@Injectable()
export class FeedbackService {
  private sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  getAllFeedback(): Observable<Feedback[]>{
    return this.af.database.list('feedback')
      .map(results => Feedback.fromJsonArray(results));
  }

  getFeedbackOfStudent(studentId: string) : Observable<Feedback[]>{
    return this.af.database.list('feedback', {
      query: {
        orderByChild: 'studentId',
        equalTo: studentId
      }
    }).map(results => Feedback.fromJsonArray(results));
  }

  getFeedbackOfReviewer(reviewerId: string): Observable<Feedback[]>{
    return this.af.database.list('feedback', {
      query: {
        orderByChild: 'reviewerId',
        equalTo: reviewerId
      }
    }).map(results => Feedback.fromJsonArray(results));
  }

  getFeedbackOfStudentAndReviewer(studentId: string, reviewerId: string){

  }

  createNewFeedback(feedback: Feedback){
    let newFeedbackKey = this.sdkDb.child('feedback').push().key;
    feedback.key = newFeedbackKey;
    let feedbackToSave = Object.assign({}, feedback);
    let dataToSave = {};
    dataToSave['feedback/'+newFeedbackKey] = feedbackToSave;

    return this.firebaseUpdate(dataToSave);
  }

  firebaseUpdate(dataToSave){
    const subject = new Subject();
    this.sdkDb.update(dataToSave)
      .then(
        val => {
          subject.next(val);
          subject.complete();
        },
        err => {
          subject.error(err);
          subject.complete();
        }
      );

    return subject.asObservable();
  }
}
