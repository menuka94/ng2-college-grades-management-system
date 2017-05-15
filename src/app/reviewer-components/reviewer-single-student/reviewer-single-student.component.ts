import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "../../models/Student";
import {Module} from "../../models/Module"
import {ActivatedRoute, Router} from "@angular/router";
import {SemestersService} from "../../services/semesters.service";
import {Semester} from "../../models/Semester";
import {Observable} from "rxjs/Observable";
import {StudentsService} from "../../services/students.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-reviewer-single-student',
  templateUrl: 'reviewer-single-student.component.html',
  styleUrls: ['reviewer-single-student.component.css']
})
export class ReviewerSingleStudentComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.setOGPA();
  }

  @Input('student')
  student$: Observable<Student>;
  student: Student;

  semesters: Semester[] = [];
  semesters$: Observable<Semester[]>;
  allModules = {};
  ogpa: string;

  constructor(private route: ActivatedRoute,
              private semestersService: SemestersService,
              private studentsService: StudentsService,
              private router: Router) {
  }

  setOGPA(){
    let ogpa: number = 0.00;
    let numerator: number = 0.00;
    let denominator: number = 0.00;
    for(let semester of this.semesters){
      numerator += +semester.totalCredits * +semester.sgpa;
      denominator += +semester.totalCredits;
    }

    if(denominator > 0){
      ogpa = numerator/denominator;
    }

    this.ogpa = ogpa.toString().substr(0, 6);
  }

  ngOnInit() {
    let studentId = this.route.snapshot.params['studentId'];
    this.student$ = this.studentsService.getStudentByUserId(studentId);
    this.student$.subscribe(result => {
        // console.log('subscribe(): ', result);
        this.student = Student.fromJson(result);
      }
    );

    // console.log('studentId: ', studentId);

    this.semesters$ = this.semestersService.getSemestersOfStudent(studentId);

    this.semesters$.subscribe(
      data => {
        this.semesters = [];
        data.map(semester => {
          let s = Semester.fromJson(semester);
          // get modules of the semester
          this.semestersService.getModulesOfSemester(studentId, semester.number)
            .subscribe(
              response => {
                semester.modules = response;
                this.allModules[semester.number] = semester.modules;
              }
            );
          this.semesters.push(s);
          this.setOGPA();
        });

        // console.log("Semesters[]: ", this.semesters);
      },
      err => {
        console.log("Error: ", err);
      }
    );
  }

}
