import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
  filteredStudents: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students$ = this.studentsService.getAllStudents();
    this.students$.subscribe(
      students => {
        this.students = students;
        this.filteredStudents = students;
      }
    );
  }

  filter(query: string){
    if(query){
      this.filteredStudents = this.students
        .filter(student => student.firstName.toLowerCase().match(query.toLowerCase()) ||
                            student.lastName.toLowerCase().match(query.toLowerCase()) ||
                            student.indexNo.toLowerCase().match(query.toLowerCase()) ||
                            student.department.toLowerCase().match(query.toLowerCase()) ||
                            student.gender.toLowerCase().match(query.toLowerCase()));

    }else{
      this.filteredStudents = this.students;
    }
    console.log(this.filteredStudents);
  }
}
