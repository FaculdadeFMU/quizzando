import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-painel',
  templateUrl: 'user-painel.html',
})
export class UserPainelPage {

  jogoIniciado: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPainelPage');
  }

  onPergunta(): void{
    this.navCtrl.push('UserPerguntasPage');
  }

  onRanking(): void{
    this.navCtrl.push('UserRankingPage');
  }

}
