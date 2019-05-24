import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

/**
 * Generated class for the AdminRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-register',
  templateUrl: 'admin-register.html',
})
export class AdminRegisterPage {

  public formAdmin = {
    fullName: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''

  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminRegisterPage');
  }

  logForm(): void{
    console.log(this.formAdmin);
  }

}
