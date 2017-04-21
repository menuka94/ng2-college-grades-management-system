import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../../models/Student";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @Input()
  filteredStudents: Student[];

  constructor() { }

  ngOnInit() {
  }

}
