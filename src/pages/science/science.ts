import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { MathsvideostestsPage } from '../mathsvideostests/mathsvideostests';

@Component({
  selector: 'science-page',
  templateUrl: 'science.html',
  styles:["science.scss"]
})
export class SciencePage {
 items = ["Physics","Chemistry","Biology"];
  subject: string = "Physics";
  constructor(public navCtrl: NavController) {
    
    
  }

gotovideos(chapter){
    this.navCtrl.push(MathsvideostestsPage,{
            subjectname: chapter
          });
  }
}