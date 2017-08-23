import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { SubjectsPage } from '../subjects/subjects';

import { FindyourselfPage } from '../findyourself/findyourself';

import { MinddiversionPage } from '../minddiversion/minddiversion';

import { ProfilePage } from '../profile/profile';

import { LoginPage } from '../login/login';


 declare let AWSCognito: any;

@Component({
   selector: 'menu-page',
  templateUrl: 'menu.html'
})
export class MenuPage{
  username:any;
  cognitoUser:any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  rootPage = TabsPage;
  

  constructor(public navCtrl: NavController, public navParams:NavParams) {
    

     var poolData = {
    UserPoolId : 'ap-south-1_HrQ0yIVPE', // your user pool id here
    ClientId : '5mfp9tqebsiuggf5ab9go10jt6' // your app client id here
};
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
     this.cognitoUser = userPool.getCurrentUser();

    if (this.cognitoUser != null) {
        this.cognitoUser.getSession((err, session) => {
            if (err) {
                alert(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
             if(session.isValid() === true){

    }else{
      this.navCtrl.push(LoginPage);
    }
  });
    }

   
}

ionViewDidLoad(){
console.log(this.navParams.data);
this.username = this.navParams.data;
 // this.username = this.navParams.get(username);
}
myprofile(){
  this.navCtrl.push(ProfilePage);
}
signout(){
   this.cognitoUser.signOut();
   this.navCtrl.push(LoginPage);
}
}
