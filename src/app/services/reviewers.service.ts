import {Inject, Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {AngularFire, AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Reviewer} from "../models/Reviewer";

@Injectable()
export class ReviewersService {
  sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb)  {
    this.sdkDb = fb.database().ref();
  }

  createNewReviewer(userId: string, reviewer: Reviewer): Observable<any>{
    let reviewerToSave = Object.assign({}, reviewer);
    let dataToSave = {};
    dataToSave['reviewers/' + userId] = reviewerToSave;

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
