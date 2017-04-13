import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/security/auth.service";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser;
  public email;

  constructor(public authService: AuthService, public af: AngularFire) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.email = this.af.auth.subscribe(user => {
      if(user){
        // user logged in
        this.email = user.auth.email;
      }else{
        this.email = '';
      }
    });
  }

  logout(){
    console.log("Logout");
    this.authService.logout();
  }


  isEmailEmpty(): boolean{
    return this.email === '';
  }
}
