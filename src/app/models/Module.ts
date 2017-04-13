export class Module{
  constructor(public code: string,
              public credits: number,
              public enabled: boolean,
              public grade: string,
              public name: string){

  }

  static fromJson({code, credits, enabled, grade, name}){
    return new Module(code, credits, enabled, grade, name);
  }

  static fromJsonArray(json: any[]): Module[] {
    return json.map(Module.fromJson);
  }
}
