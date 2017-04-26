import {Module} from "./Module";

export class Semester {
  public modules: Module[];
  constructor(public number: string,
              public enabled: boolean,
              public year: string,
              public sgpa: string) {

  }

  static fromJson({number, enabled, year, sgpa}){
    return new Semester(number, enabled, year, sgpa);
  }

  static fromJsonArray(json: any[]): Semester[] {
    return json.map(Semester.fromJson);
  }

  get getModules(): Module[]{
    return this.modules;
  }
}
