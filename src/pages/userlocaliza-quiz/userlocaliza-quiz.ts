import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-userlocaliza-quiz',
  templateUrl: 'userlocaliza-quiz.html',
})
export class UserlocalizaQuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserlocalizaQuizPage');
  }

  onLocalizarGrupoPerguntas(): void{
    this.navCtrl.push('UserLocalizaGrupoPerguntasPage');
  }

  onRegisterGroup(): void{
    this.navCtrl.push('UserCadastraGrupoPage');
  }
}
