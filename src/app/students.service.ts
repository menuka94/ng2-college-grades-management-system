import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Student} from "./models/Student";

@Injectable()
export class StudentsService {
  private allStudents: Student[];

  constructor(private angularFire: AngularFire) {

  }

}
