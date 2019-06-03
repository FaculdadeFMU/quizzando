import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { v } from '@angular/core/src/render3';

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
  //Url Pagina
  private urlInputGrupoPessoa: string ='http://localhost:8889/inputGrupoPessoas';
  private urlInputIntegrantes: string = 'http://localhost:8889/inputIntegrantes';

  //Variavel da pagina
  nomeGrupo = '';
  codigoAtividade = '';
  nomeIntegrante : string;
  emailIntegrante : string;
  raIntegrante : string;


  //Variavel de controle
  idGrupoPessoas = '';
  parteIntegrantes : boolean = false;
  primieraParte : boolean = true;

  public integrante = {
    nome: '',
    email: '',
    RA: '',
    idGrupo: ''
  };

  lstIntegrantes = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCadastraGrupoPage');
  }

  async saveGroupPerson(){
    console.log('Chegou aqui no server');
    console.log('Nome do grupo: ' + this.nomeGrupo);
    console.log('Nome codigo atividade: ' + this.codigoAtividade);

    let grupoPessoa = ({nomeGrupo : this.nomeGrupo, codigoAtividade: this.codigoAtividade});

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(grupoPessoa).map((key) => {
      form.append(key,grupoPessoa[key]);
    })

    const res = await (await fetch(`${this.urlInputGrupoPessoa}?nomeGrupo=${grupoPessoa.nomeGrupo}&id_atividade=${grupoPessoa.codigoAtividade}`)).json();

    if(res.statusCode == 200){
      const {data}=res;
      this.idGrupoPessoas = data.insertId;
      console.log('Grupo de pessoas: ' + this.idGrupoPessoas );

      this.parteIntegrantes = true;
      this.primieraParte = false;

    }else{
      console.log('Erro ao inserir o grupo');
    }
  }


  async savePerson(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(this.integrante).map((key) => {
      form.append(key,this.integrante[key]);
    })

    const res = await (await fetch(`${this.urlInputIntegrantes}?nome=${this.integrante.nome}&email=${this.integrante.email}&RA=${this.integrante.RA}&idGrupo=${this.integrante.idGrupo}`)).json();

    if(res.statusCode == 200){
      const {data}=res;

      this.nomeIntegrante = '';
      this.emailIntegrante = '';
      this.raIntegrante = '';

    }else{
      console.log('Erro ao inserir o grupo');
    }
  }


  onProximoPassoIntegrantes(){

    this.saveGroupPerson();
  }

  adicionaIntegrantes(){

    this.integrante = ({nome: this.nomeIntegrante, email: this.emailIntegrante, RA: this.raIntegrante, idGrupo : this.idGrupoPessoas });
    console.log('Id do grupo: ' + this.integrante.idGrupo);
    this.savePerson();

  }

  finalizaCadastro(){
    this.navCtrl.push('UserlocalizaQuizPage');
  }


}
