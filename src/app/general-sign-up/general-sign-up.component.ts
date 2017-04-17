import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-general-sign-up',
  templateUrl: './general-sign-up.component.html',
  styleUrls: ['./general-sign-up.component.css']
})
export class GeneralSignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectTo(path: string){
    this.router.navigate([path]);
  }

}
