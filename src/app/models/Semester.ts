import {Module} from "./Module";

export class Semester {
  public modules: Module[];
  constructor(public number: string,
              public enabled: boolean,
              public year: string,
              public sgpa: string,
              public totalCredits: string) {

  }

  static fromJson({number, enabled, year, sgpa, totalCredits}){
    return new Semester(number, enabled, year, sgpa, totalCredits);
  }

  static fromJsonArray(json: any[]): Semester[] {
    return json.map(Semester.fromJson);
  }
}

