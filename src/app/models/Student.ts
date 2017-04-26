export class Student {
  constructor(public userId: string,
              public firstName: string,
              public lastName: string,
              public gender: string,
              public birthday: string,
              public email: string,
              public indexNo: string,
              public department: string
              ) {

  }

  static fromJson({userId, firstName, lastName, gender, birthday, email, indexNo, department}){
    return new Student(userId, firstName, lastName,gender, birthday, email, indexNo, department);
  }

  static fromJsonArray(json: any[]): Student[] {
    return json.map(Student.fromJson);
  }
}
