export class Reviewer{
  constructor(public firstName: string,
              public lastName: string,
              public gender: string,
              public employeeNo: string,
              public email: string,
              public uid: string,
              public approved: boolean){

  }

  static fromJson({firstName, lastName, gender, employeeNo, email, uid, approved}){
    return new Reviewer(firstName, lastName, gender, employeeNo, email, uid, approved);
  }

  static fromJsonArray(json: any[]): Reviewer[]{
    return json.map(Reviewer.fromJson);
  }
}
