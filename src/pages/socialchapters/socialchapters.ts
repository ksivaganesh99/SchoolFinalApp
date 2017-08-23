import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MathsvideostestsPage } from '../mathsvideostests/mathsvideostests';

@Component({
  selector: 'socialchapters-page',
  templateUrl: 'socialchapters.html',
  styles:["socialchapters.scss"]
})
export class SocialchaptersPage {
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