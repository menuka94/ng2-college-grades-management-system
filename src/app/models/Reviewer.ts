export class Reviewer{
  constructor(public firstName: string,
              public lastName: string,
              public gender: string,
              public employeeNo: string,
              public email: string,
              public approved: boolean){

  }

  static fromJson({firstName, lastName, gender, employeeNo, email, approved}){
    return new Reviewer(firstName, lastName, gender, employeeNo, email, approved);
  }

  static fromJsonArray(json: any[]): Reviewer[]{
    return json.map(Reviewer.fromJson);
  }
}
