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
  private url: string = 'http://localhost:8888/inputBasico'
  public formAdmin = {
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''

  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logForm(): void{
    console.log(this.formAdmin);
  }
  async saveCad(formAdmin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(this.formAdmin).map((key) => {
      form.append(key, this.formAdmin[key]);
    })
    const res = await (await fetch(`${this.url}?confirmacaoSenha=${this.formAdmin.confirmacaoSenha}&email=${this.formAdmin.email}&nome=${this.formAdmin.nome}&senha=${this.formAdmin.senha}`)).json();
     console.log(res);
     this.navCtrl.push("AdminLoginPage");
  }
}
