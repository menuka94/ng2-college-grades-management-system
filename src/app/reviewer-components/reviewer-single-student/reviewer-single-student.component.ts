import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewer-single-student',
  templateUrl: 'reviewer-single-student.component.html',
  styleUrls: ['reviewer-single-student.component.css']
})
export class ReviewerSingleStudentComponent implements OnInit {
  student = {firstName: "Harry", lastName: "Potter", indexNo: "140001A", gender: "Male"};
  academicRecords = [
    {
      semester: "1",
      sgpa: "3.95",
      modules: [
        {code: "CS1032", name: "Programming Fundamentals",credits: "3", grade: "A-"},
        {code: "MT1022", name: "Properties of Materials", credits: "2", grade: "A-"},
        {code: "CE1022", name: "Fluid Mechanics", credits: "2", grade: "A+"},
        {code: "ME1013", name: "Mechanics", credits: "2", grade: "A+"},
        {code: "EE1012", name: "Electrical Engineering", credits: "2", grade: "A-"},
        {code: "MA1013", name: "Mathematics", credits: "2", grade: "A"},
      ]
    },
    {
      semester: "2",
      sgpa: "3.2",
      modules: [
        {code: "CS2022", name: "Data Structures and Algorithms", credits: "2.5", grade: "A-"},
        {code: "CS1033", name: "Object Oriented Programming", credits: "3", grade: "B"},
        {code: "CE1035", name: "Computer Architecture", credits: "2", grade: "A-"},
        {code: "EE1013", name: "Theory of Electricity", credits: "2", grade: "C+"},
        {code: "ME1012", name: "Introduction to Manufacturing Engineering", credits: "2", grade: "C"},
        {code: "MA2013", name: "Numerical Methods for Computer Science", credits: "3", grade: "B"},
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
