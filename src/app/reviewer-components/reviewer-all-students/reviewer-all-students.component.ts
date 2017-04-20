import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../models/Student";
import {StudentsService} from "../../services/students.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-reviewer-all-students',
  templateUrl: 'reviewer-all-students.component.html',
  styleUrls: ['reviewer-all-students.component.css']
})
export class ReviewerAllStudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  students: Student[];

  @Output('student')
  studentEmitter = new EventEmitter<Student>();

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students$ = this.studentsService.getAllStudents();
    this.students$.subscribe();
    console.log(this.students$);
  }

  selectStudent(student: Student){
    this.studentEmitter.emit(student);
  }

}
