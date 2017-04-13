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
  public heroesArray: Hero[];
  private hero: Hero;
  public uid;
  public email;

  constructor(private af: AngularFire, public authService: AuthService) {
    this.heroes = af.database.object('heroes', {preserveSnapshot: true});
    this.heroes.subscribe(snapshot => {
      // console.log(snapshot.key);
      // console.log(snapshot.val());
      // this.hero.$id  = snapshot.key;
      // this.hero.name = snapshot.val();
      // this.heroesArray.push(this.hero);
    });
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
