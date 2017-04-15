import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'College Grades Management System';
  public heroes: FirebaseListObservable<any[]>;
  private value: FirebaseObjectObservable<any>;

  public id = "1";
  public name = "Harry Potter";

  ngOnInit(){

  }

  constructor(af: AngularFire){
    this.heroes = af.database.list('/heroes');
    this.value = af.database.object('/value');
  }

  // addToList(item: any){
  //   this.heroes.push(item);
  // }
  //
  // updateValue(data: any){
  //   this.value.update(data).then(_ => console.log('update!'));
  // }
  //
  // deleteValue(){
  //   this.value.remove().then(_ => console.log('deleted!'));
  // }

}
