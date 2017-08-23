import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { SubjectsPage } from '../subjects/subjects';

import { TabsPage } from '../tabs/tabs';

import { MenuPage } from '../menus/menu';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
 
  constructor(public navCtrl: NavController) {
    
  }
login(){

    this.navCtrl.push(LoginPage);
}
gotosubject(){
   this.navCtrl.push(MenuPage);
}

}