import { Component } from '@angular/core';


import { NavController , NavParams} from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'mathsvideostests-page',
  templateUrl: 'mathsvideostests.html',
  styles:["mathsvideostests.scss"]
})
export class MathsvideostestsPage {
   
  type: string = "tests";
  public subjectname:any;
  constructor(public navCtrl: NavController , public params:NavParams) {
     this.subjectname = params.get("subjectname");
  }



}