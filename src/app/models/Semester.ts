import {Module} from "./Module";
export class Semester {
  constructor(public number: string,
              public enabled: boolean,
              public year: string) {

  }

  static fromJson({number, enabled, year}){
    return new Semester(number, enabled, year);
  }

  static fromJsonArray(json: any[]): Semester[] {
    return json.map(Semester.fromJson);
  }
}
