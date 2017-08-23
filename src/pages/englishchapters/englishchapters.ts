import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MathsvideostestsPage } from '../mathsvideostests/mathsvideostests';

@Component({
  selector: 'englishchapters-page',
  templateUrl: 'englishchapters.html',
  styles:["englishchapters.scss"]
})
export class EnglishchaptersPage {
 items = ["Physics","Chemistry","Biology"];
  subject: string = "Physics";
  pet: string = "puppies";
  constructor(public navCtrl: NavController) {
    
  }

gotovideos(chapter){
    this.navCtrl.push(MathsvideostestsPage,{
            subjectname: chapter
          });
  }


}