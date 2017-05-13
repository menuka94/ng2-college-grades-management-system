import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {StudentsService} from "../../services/students.service";
import {Student} from "../../models/Student";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: 'student-dashboard.component.html',
  styleUrls: ['student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  public studentId: string;
  student: Student;

  constructor(private af: AngularFire,
              private studentsService: StudentsService) { }

  ngOnInit() {

  }
}
