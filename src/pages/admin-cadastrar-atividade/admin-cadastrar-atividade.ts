import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminCadastrarAtividadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-cadastrar-atividade',
  templateUrl: 'admin-cadastrar-atividade.html',
})
export class AdminCadastrarAtividadePage {
  public grupo: Array<{nomeGrupo: string}>;
  public pepperoni: boolean = false;
  public formAtividade = {
    nomeAtividade: '',
    qtdIntegrantes: ''

  };
  lstNomeGrupos =[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCadastrarAtividadePage');
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

  logForm():void{
    console.log(this.formAtividade);
  }

  nomeGrupos():void{

    //this.nomeGrupoDigitado = navParams.get('item');
  }

}
