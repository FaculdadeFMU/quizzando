import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoginAdmin():void {
  this.navCtrl.push('AdminLoginPage');
}

  onCarregaAtividade():void {
    this.navCtrl.push('UserlocalizaQuizPage');
  }

}
