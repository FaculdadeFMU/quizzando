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
    lstGrupos:[]
  };

  public grupo = [];
  public lstNomeGrupos = [];

  public integrante = {
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

  adicionaIntegrante(): void{
    let inputNome = document.getElementById('nomeGrupo').getElementsByTagName('input')[0];
    let inputEmail = document.getElementById('nomeGrupo').getElementsByTagName('input')[0];
    let inputRA = document.getElementById('nomeGrupo').getElementsByTagName('input')[0];

    this.integrante = {nome:"\""+inputNome+"\"", email: "\""+inputEmail+"\"", RA : "\""+inputRA+"\""};

    console.log(this.integrante);

  }

  addGroupList(): void {
    let input = document.getElementById('nomeGrupo').getElementsByTagName('input')[0];

    this.grupo = [];
    this.grupo.push({
      nomeGrupo: input.value
    });
    this.lstNomeGrupos.push(input.value);
    console.log(input.value);

    this.lstNomeGrupos.forEach(function (item, indice, array) {
      console.log(item, indice);
    });

    document.getElementById('nomeGrupo').getElementsByTagName('input')[0].value='';

  }

}
