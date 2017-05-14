import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AngularFire} from "angularfire2";
import {StudentsService} from "../../services/students.service";
import {Student} from "../../models/Student";
import {Semester} from "../../models/Semester";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";
import {SemestersService} from "../../services/semesters.service";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: 'student-dashboard.component.html',
  styleUrls: ['student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  studentId: string;
  student: Student;
  semesters: Semester[];
  semesters$: Observable<Semester[]>;
  allModules = {};

  constructor(private af: AngularFire,
              private studentsService: StudentsService,
              private semestersService: SemestersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.studentId = params['studentId'];
      console.log("StudentId: ", this.studentId);
    });

    this.studentsService.getStudentByUserId(this.studentId)
      .subscribe(student => {
        this.student = student;
      });

    this.semesters$ = this.semestersService.getSemestersOfStudent(this.studentId);

    this.semesters$.subscribe(
      data => {
        this.semesters = [];
        data.map(semester => {
          let s = Semester.fromJson(semester);
          // get modules of the semester
          this.semestersService.getModulesOfSemester(this.studentId, semester.number)
            .subscribe(
              response => {
                semester.modules = response;
                this.allModules[semester.number] = semester.modules;
              }
            );
          this.semesters.push(s);
        });

        // console.log("Semesters[]: ", this.semesters);
      },
      err => {
        console.log("Error: ", err);
      }
    );

  }

  removeSemester(number: string){
    if(confirm("Are you sure want to delete semester" + number + "?")){
      // this.semestersService.
    }
  }
}
