import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {
  private url: string = 'http://localhost:8889/getBasico'
  public formAdmin = {
    email: '',
    senha: '',
  };

  user:{
userInfo: "[{\"id_users\":1,\"nome\":\"Leonardo\",\"email\":\"Leonardo.guedes.rocha@gmail.com\",\"senha\":\"123\"}]"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('')
  }
  onRegister(): void{
    this.navCtrl.push('AdminRegisterPage');
  }

  logForm(): void {
    console.log(this.formAdmin);
  }


  async getTeste() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const res = await (await fetch(`${this.url}?email=${this.formAdmin.email}&senha=${this.formAdmin.senha}`)).json();
    console.log(res);
    if (res.statusCode == 200) {
      const { data } = res;
      localStorage.setItem('userInfo', JSON.stringify(data));
      const [obj] = JSON.parse(localStorage.getItem('userInfo'));
      console.log(obj.id_users);
      alert("Login com Sucesso");
      this.navCtrl.push('AdminHomePage',{userId:obj.id_users});
    }else{
    alert("Usuário ou senha inválidos");
    }
  }

}
