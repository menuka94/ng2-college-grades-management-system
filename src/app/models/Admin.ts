export class Admin{
  constructor(public userId: string,
              public email: string
              ) {
  }

  static fromJson({userId, email}){
    return new Admin(userId, email);
  }

  static fromJsonArray(json: any[]): Admin[] {
    return json.map(Admin.fromJson);
  }
}
