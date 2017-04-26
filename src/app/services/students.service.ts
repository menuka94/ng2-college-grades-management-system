import {Inject, Injectable} from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Student} from "../models/Student";
import {Subject} from "rxjs/Subject";

@Injectable()
export class StudentsService {
  private sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  getAllStudents(): Observable<Student[]>{
    return this.af.database.list('students')
      .map(Student.fromJsonArray);
  }

  getStudentByUserId(userId: string): Observable<Student>{
    return this.af.database.list('students', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    }).map(results => results[0]);
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
