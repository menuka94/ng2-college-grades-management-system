export class Student {
  constructor(public uid: number,
              public firstName: string,
              public lastName: string,
              public gender: string,
              public birthday: string,
              public email: string,
              public indexNo: string,
              public department: string
              ) {

  }

  static fromJson({uid, firstName, lastName, gender, birthday, email, indexNo, department}){
    return new Student(uid, firstName, lastName,gender, birthday, email, indexNo, department);
  }

  static fromJsonArray(json: any[]): Student[] {
    return json.map(Student.fromJson);
  }
}
