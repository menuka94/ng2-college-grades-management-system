import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Admin} from "../models/Admin";

@Injectable()
export class AdminService {

  constructor(private af: AngularFire) { }

  getAllAdmins(): Observable<Admin[]>{
    return this.af.database.list('admins')
      .map(Admin.fromJsonArray)
  }
}
