import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'minddiversion-page',
  templateUrl: 'minddiversion.html'
})
export class MinddiversionPage {
 items = ["Friend zone","Games corner","Daily teasers"];
  constructor(public navCtrl: NavController) {
    
  }
login(){

    this.navCtrl.push(LoginPage);
}

}