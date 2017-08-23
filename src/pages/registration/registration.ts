import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { SubjectsPage } from '../subjects/subjects';

import { TabsPage } from '../tabs/tabs';

import { MenuPage } from '../menus/menu';

import { AlertController } from 'ionic-angular';

 declare let AWSCognito: any;

@Component({
  selector: 'registration-page',
  templateUrl: 'registration.html'
})

export class RegistrationPage {
 name:String;
 mobileno:number;
 emailid:any;
 password1:any;
 standard:any;
 userPool:any;
 cognitoUser:any;

 //AWSCognito:any = AWSCognito;
 registerForm:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public formBuilder:FormBuilder) {
    //alert(AWSCognito);
    AWSCognito.config.region = 'ap-south-1';
     
var poolData = {
    UserPoolId : 'ap-south-1_HrQ0yIVPE', // your user pool id here
    ClientId : '5mfp9tqebsiuggf5ab9go10jt6' // your app client id here
};
 this.userPool = 
new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

//alert(this.userPool);
//this.registerForm = this.formBuilder.group({
  //      name: ['',Validators.compose([Validators.required])],
    //    password1: ['',Validators.compose([Validators.required])]
    //});
  }
login(){
  //if(this.registerForm.valid){
         this.navCtrl.push(LoginPage);
    //} 
   
}
 showAlert() : any {
     console.log("sdfsf");
    let alert = this.alertCtrl.create({
      title: 'Registration Successful',
      subTitle: 'Please login with your Username and Password',
      buttons: ['OK']
    });
    alert.present();
  }
    
register(){
 // alert(this.standard);
   //this.navCtrl.push(MenuPage);
	 var attributeList = [];
   // alert("Password"+this.password1);
	var dataName = {
        Name : 'name',
        Value : this.name
    };
    var dataEmail = {
        Name : 'email',
        Value : this.emailid
    };
    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : ''
    };
     var dataMobileNumber = {
        Name : 'custom:mobilenumber',
        Value : this.mobileno
    };
	var motherName = {
        Name : 'custom:mothername',
        Value : ''
    };
	var standard = {
        Name : 'custom:Standard',
        Value : this.standard
    };
	
    var attributeName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName);
    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
	var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
  var attributeMobileNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataMobileNumber);
    var attributeMotherName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(motherName);
	var attributeStandard = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(standard);
    

   // attributeList.push(attributeName);
    attributeList.push(attributeEmail);
	//attributeList.push(attributePhoneNumber);
  //	attributeList.push(attributeMobileNumber);
	//attributeList.push(attributeMotherName);
	//attributeList.push(attributeStandard);
  console.log(attributeList);
    this.userPool.signUp(this.name.replace(/\s+/g, ''),this.password1, attributeList, null,(err, result) => {
        if (err) {
            alert(err);
            return;
        }
        console.log(result.user);
        var cognitoUser = result.user;
        console.log(cognitoUser.username);
        console.log('user name is ' + cognitoUser.getUsername());
        this.showAlert();
        this.login();
        
    });
	
}

}