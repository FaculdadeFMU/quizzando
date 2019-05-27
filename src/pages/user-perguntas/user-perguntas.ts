import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-perguntas',
  templateUrl: 'user-perguntas.html',
})
export class UserPerguntasPage {
  private url: string ='http://localhost:8889/getPergunta'
  proximaPergunta: boolean = false;

  qtdPerguntas : string;
  numPerguntaAtual : string;
  perguntaAtualDisplay: string;
  enunciado : string;
  public altA : string;
  public altB : string;
  public altC : string;
  public altD : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPerguntasPage');
    this.numPerguntaAtual = '0';
    this.carregaPerguntas();
    this.contadorPerguntas();


  }

  contadorPerguntas(){

    if(parseInt(this.numPerguntaAtual) >= parseInt(this.qtdPerguntas)){
      this.navCtrl.push('UserLocalizaGrupoPerguntasPage');
    }else{
      this.perguntaAtualDisplay = (parseInt(this.numPerguntaAtual)+1).toString();
      this.numPerguntaAtual = (parseInt(this.numPerguntaAtual)+1).toString();
    }

  }

  async carregaPerguntas() {
    const res = await (await fetch(`${this.url}`)).json();
    this.qtdPerguntas = res.length;
    console.log('Quantidade de perguntas: ' + this.qtdPerguntas);
    console.log('Cheguei aqui');

    if(parseInt(this.numPerguntaAtual) < parseInt(this.qtdPerguntas)){
      this.enunciado = res[parseInt(this.numPerguntaAtual)].enunciado;
      this.altA = res[parseInt(this.numPerguntaAtual)].alternativaA;
      this.altB = res[parseInt(this.numPerguntaAtual)].alternativaB;
      this.altC = res[parseInt(this.numPerguntaAtual)].alternativaC;
      this.altD = res[parseInt(this.numPerguntaAtual)].alternativaD;
    }
  }


  respotaAltA(){
    console.log('resposta A chegou');
    this.contadorPerguntas();
    this.carregaPerguntas();
    console.log('o numero da pergunta é: ' + this.numPerguntaAtual);



  }
}
