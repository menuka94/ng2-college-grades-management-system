import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/security/auth.service";
import {AngularFire} from "angularfire2";
import {AuthInfo} from "../shared/security/auth-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser;
  public email;
  authInfo: AuthInfo;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) { }

  ngOnInit() {
    this.authService.authInfo$
      .subscribe(authInfo => this.authInfo = authInfo);

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
    if(confirm("Are you sure you want to logout?")){
      console.log("Navbar Logout");
      this.authService.logout();
      this.router.navigate(['']);
    }
  }


  isEmailEmpty(): boolean{
    return this.email === '';
  }
}
