import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import * as firebase from "firebase/app";
import DataSnapshot = firebase.database.DataSnapshot;
import {Hero} from "../models/Hero";
import {AuthService} from "../shared/security/auth.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public heroes: FirebaseObjectObservable<DataSnapshot>;
  public uid;
  public email;

  constructor(private af: AngularFire, public authService: AuthService) {

  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if(auth){
        console.log(auth.auth.email);
      }else{
        console.log("Not logged in");
      }
    });
  }

}
