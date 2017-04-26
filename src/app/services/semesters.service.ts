import {Inject, Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {AngularFire, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Semester} from "../models/Semester";
import {Module} from "../models/Module";

@Injectable()
export class SemestersService {
  sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  getAllSGPAsOfStudent(studentId: string){

  }

  getSemestersOfStudent(studentId: string): Observable<Semester[]>{
    return this.af.database.list('semesters/' + studentId)
      .do(results => console.log('semesters(): ', results))
      .map(Semester.fromJsonArray);
  }

  getModulesOfSemester(studentId, string, semesterId: string): Observable<Module[]>{
    return this.af.database.list('semesters/' + studentId + '/modules')
      .do(results => console.log('Modules: ', results))
      .map(Module.fromJsonArray);
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
