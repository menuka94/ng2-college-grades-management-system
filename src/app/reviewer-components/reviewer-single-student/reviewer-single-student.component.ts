import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/Student";
import {ActivatedRoute, Router} from "@angular/router";
import {SemestersService} from "../../services/semesters.service";
import {Semester} from "../../models/Semester";
import {Observable} from "rxjs/Observable";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-reviewer-single-student',
  templateUrl: 'reviewer-single-student.component.html',
  styleUrls: ['reviewer-single-student.component.css']
})
export class ReviewerSingleStudentComponent implements OnInit {
  @Input('student')
  student$: Observable<Student>;
  student: Student;

  semesters: Semester[] = [];
  semesters$: Observable<Semester[]>;

  constructor(private route: ActivatedRoute,
              private semestersService: SemestersService,
              private studentsService: StudentsService,
              private router: Router) {
  }

  ngOnInit() {
    let studentId = this.route.snapshot.params['studentId'];
    this.student$ = this.studentsService.getStudentByUserId(studentId);
    this.student$.subscribe(result => {
        // console.log('subscribe(): ', result);
        this.student = Student.fromJson(result);
      }
    );

    console.log('studentId: ', studentId);

    this.semesters$ = this.semestersService.getSemestersOfStudent(studentId);

    this.semesters$.subscribe(
      data => {
        data.map(semester => {
          let s = Semester.fromJson(semester);
          this.semesters.push(s);
        });

        console.log("Semesters[]: ", this.semesters);
      },
      err => {

      }
    );
  }

}
