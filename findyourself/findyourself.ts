import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'findyourself-page',
  templateUrl: 'findyourself.html'
})
export class FindyourselfPage {
 items = ["Personality test","Aptitude test","Interest test","Skill builder"];
  constructor(public navCtrl: NavController) {
    
  }
login(){

    this.navCtrl.push(LoginPage);
}

}