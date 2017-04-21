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

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students$ = this.studentsService.getAllStudents();
    this.students$.subscribe();
  }

  filter(searchText: string){
    console.log(searchText);
  }

}
