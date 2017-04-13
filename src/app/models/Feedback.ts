export class Feedback{
  constructor(public reviewerId: string,
              public studentId: string,
              public rating: string,
              public comment: string,
              public date: string){

  }

  static fromJson({reviewerId, studentId, rating, comment, date}){
    return new Feedback(reviewerId, studentId, rating, comment, date);
  }

  static fromJsonArray(json: any[]): Feedback[] {
    return json.map(Feedback.fromJson);
  }

}
