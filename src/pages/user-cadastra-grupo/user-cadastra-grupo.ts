import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserCadastraGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-cadastra-grupo',
  templateUrl: 'user-cadastra-grupo.html',
})
export class UserCadastraGrupoPage {

  public formGrupUser = {
    nomeGrupo: '',
    nome: '',
    email: '',
    RA: ''

  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCadastraGrupoPage');
  }

  logForm(): void{
    console.log(this.formGrupUser);
  }

}
