export class Feedback{
  constructor(public reviewerId: string,
              public studentId: string,
              public rating: string,
              public comment: string,
              public date: string,
              public key: string){

  }

  static fromJson({reviewerId, studentId, rating, comment, date, key}){
    return new Feedback(reviewerId, studentId, rating, comment, date, key);
  }

  static fromJsonArray(json: any[]): Feedback[] {
    return json.map(Feedback.fromJson);
  }

}
