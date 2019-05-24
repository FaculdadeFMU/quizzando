import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminLoginPage');
  }

  onHomeAdmin():void {
    this.navCtrl.push('AdminHomePage');
  }

  onRegister():void{
    this.navCtrl.push('AdminRegisterPage');
    console.log('Chamou a pagina mano');
  }

}
