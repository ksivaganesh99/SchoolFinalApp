import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

import { SubjectsPage } from '../subjects/subjects';

import { TabsPage } from '../tabs/tabs';

import { MenuPage } from '../menus/menu';

 declare let AWSCognito: any;

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:any;
  password:any;

 
  constructor(public navCtrl: NavController) {
    
  }
gotoregister(){

  this.navCtrl.push(RegistrationPage);
}
gotosubject(){

  var authenticationData = {
        Username : this.username,
        Password : this.password,
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
   var poolData = {
    UserPoolId : 'ap-south-1_HrQ0yIVPE', // your user pool id here
    ClientId : '5mfp9tqebsiuggf5ab9go10jt6' // your app client id here
};
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var userData = {
        Username : this.username,
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess:  (result) => {
            console.log('access token + ' + result.getAccessToken().getJwtToken());

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWSCognito.config.region = 'ap-south-1';
            console.log(result);
            AWSCognito.config.credentials = new AWSCognito.CognitoIdentityCredentials({
                IdentityPoolId : 'ap-south-1:f30aa170-5ea2-44fd-ad5c-f1178aea3258', // your identity pool id here
                Logins : {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.ap-south-1.amazonaws.com/ap-south-1_rWx2iAUs2' : result.getIdToken().getJwtToken()
                }
            });

                  this.navCtrl.push(MenuPage,this.username);
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();

        },

        onFailure: function(err) {
            alert(err);
        },

    });


}

}