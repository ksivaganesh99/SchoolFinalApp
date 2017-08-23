import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 slides = [{title : "Learning videos",
            description : "Now learning has become more funand interactive",
            image : "assets/images/slide1.png"
            },
            {title : "Test and analysis",
            description : "Know your understanding instantly",
            image : "assets/images/slide2.png"
            },
            {title : "Time to relax",
            description : "Refresh your brain playing brain games",
            image : "assets/images/slide3.png"
            },
            ];
            mySlideOptions = {
    
    pager: true
  };
  constructor(public navCtrl: NavController) {
    
  }

 nextpage(){
 this.navCtrl.push(RegistrationPage);
}

}
