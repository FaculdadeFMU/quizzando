import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
    let teste = this.navParams.get('userId');
    console.log('Id do Usuário: ' + teste);
  }

  onCasdastrarAtividade():void {
    this.navCtrl.push('AdminCadastrarAtividadePage',{userId:this.navParams.get('userId')});
  }
}
