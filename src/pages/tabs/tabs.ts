import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SubjectsPage } from '../subjects/subjects';

import { FindyourselfPage } from '../findyourself/findyourself';

import { MinddiversionPage } from '../minddiversion/minddiversion';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage{
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root = SubjectsPage;
  tab2Root = FindyourselfPage;
  tab3Root = MinddiversionPage;

  constructor(public navCtrl: NavController) {
    
  }


}