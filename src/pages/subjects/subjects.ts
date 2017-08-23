import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { SciencePage } from '../science/science';

import { MathschaptersPage } from '../mathschapters/mathschapters';

import { SocialchaptersPage } from '../socialchapters/socialchapters';

import { EnglishchaptersPage } from '../englishchapters/englishchapters';




@Component({
  selector: 'subjects-page',
  templateUrl: 'subjects.html'
})
export class SubjectsPage {
 items = ["Mathmatics","Science","Previous Questions","Concepts"];
  constructor(public navCtrl: NavController) {
    
  }
descriptionpage(page){
console.log(page);
if(page === "MathschaptersPage"){
    this.navCtrl.push(MathschaptersPage);
} else if(page === "SciencePage"){
     this.navCtrl.push(SciencePage);
}else if(page === "SocialchaptersPage"){
     this.navCtrl.push(SocialchaptersPage);
}
else if(page === "EnglishchaptersPage"){
     this.navCtrl.push(EnglishchaptersPage);
}else if(page === "PreviousPage"){
     //this.navCtrl.push(SciencePage);
}else if(page === "ConceptsPage"){
    // this.navCtrl.push(SciencePage);
}
}
}