import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewer-all-students',
  templateUrl: 'reviewer-all-students.component.html',
  styleUrls: ['reviewer-all-students.component.css']
})
export class ReviewerAllStudentsComponent implements OnInit {

  students = [
    {firstName: "Harry", lastName: "Potter", indexNo: "140001A", gender: "Male"},
    {firstName: "Hermione", lastName: "Granger", indexNo: "140321B", gender: "Female"},
    {firstName: "Ron", lastName: "Weasley", indexNo: "140512C", gender: "Male"},
    {firstName: "Draco", lastName: "Malfoy", indexNo: "140535D", gender: "male"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
