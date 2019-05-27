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

  //valor primeira parte
  nomeAtividade: string;

  public obj = {
    nomeAtividade: '',
    usuario_id: ''
  };

  //Valor da segunda parte
  nomeGrupoTela: string;
  idAtividade : string;

  public grupo = {
    nomeGrupo : '',
    atividade_id : ''

  }
  lstGrupos =[];


  //valores da pagina terceira parte
  grupoSelecionado: string;
  perguntaPagina: string;
  altA: string;
  altB: string;
  altC: string;
  altD: string;
  altCorreta: string;


  //Variaveis de conexão
  private url: string ='http://127.0.0.1:8889/inputAtividade'
  private url1: string ='http://127.0.0.1:8889/getatividade'
  private urlInputGrupos: string ='http://127.0.0.1:8889/inputGrupos'


  //controla a pagina
  public pepperoni: boolean = false;
  public primeiraParte: boolean = true;
  public botaoPrimeiraParte: boolean = true;
  public segundaParte: boolean = false;
  public terceiraParte: boolean = false;


  public formAtividade = {
    nomeAtividade: '',
    Perguntas : []
  };

  public pergunta = {
    nomeGrupo: '',
    pergunta: '',
    alternativaA: '',
    alternativaB: '',
    alternativaC: '',
    alternativaD: '',
    alternativaCorreta :''
  }

  lstPerguntas = [];


  data : any = null;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  async saveActivity(){
    this.obj.nomeAtividade = this.nomeAtividade;
    this.obj.usuario_id = this.navParams.get('userId');

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(this.obj).map((key) => {
      form.append(key,this.obj[key]);
    })
    const res = await (await fetch(`${this.url}?nomeAtividade=${this.obj.nomeAtividade}&usuario_id=${this.obj.usuario_id}`)).json();


     if(res.statusCode == 200){
       const {data}=res;
       localStorage.setItem('atividadeinfo', JSON.stringify(data));

       //Desabilita compoentes da pagina.
       this.primeiraParte = false;
       this.segundaParte = true;
     }
  }

  async saveGroup(){
    console.log('valor do grupo: ' + this.grupo);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(this.grupo).map((key) => {
      form.append(key,this.grupo[key]);
    })
    const res = await (await fetch(`${this.urlInputGrupos}?nomeAtividade=${this.grupo.nomeGrupo}&atividade_id=1`)).json();
     console.log(res);
     if(res.statusCode == 200){
       const retornoGrupo =  await (await fetch(`${this.urlInputGrupos}?nomeAtividade=${this.grupo.nomeGrupo}&atividade_id=1`)).json();
       const {data} = retornoGrupo;
       localStorage.setItem('grupoPerguntainfo', JSON.stringify(data));

       //Desabilita compoentes da pagina.
       this.segundaParte = false;
       this.terceiraParte = true;
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCadastrarAtividadePage');
  }

  addGroupList(): void {
    this.grupo.nomeGrupo = this.nomeGrupoTela;
    this.grupo.atividade_id = '1';

    this.lstGrupos.push(this.grupo);

    //this.saveGroup();

    this.lstGrupos.forEach(function (item, indice, array) {
      console.log(item, indice);
    });
  }

  removeGroupList(): void {

  }

  adicionarPerguntas(): void{

    this.pergunta = {nomeGrupo : "\""+this.grupoSelecionado+"\"",
                    pergunta:"\""+this.perguntaPagina+"\"",
                    alternativaA : "\""+this.altA+"\"",
                    alternativaB : "\""+this.altB+"\"",
                    alternativaC : "\""+this.altC+"\"",
                    alternativaD : "\""+this.altD+"\"",
                    alternativaCorreta :  "\""+this.altCorreta+"\""
                    };

    this.lstPerguntas.push(this.pergunta);

    console.log('lista de perguntas: ' + JSON.stringify(this.lstPerguntas));

    console.log('Lista de perguntas grupo: ' + this.pergunta.nomeGrupo);
    console.log('Lista de perguntas pergunta: ' +  this.pergunta.pergunta);
    console.log('Lista de perguntas alt A: ' +  this.pergunta.alternativaA);
    console.log('Lista de perguntas alt B: ' +  this.pergunta.alternativaB);
    console.log('Lista de perguntas alt C: ' +  this.pergunta.alternativaC);
    console.log('Lista de perguntas alt D: ' +  this.pergunta.alternativaD);
    console.log('Lista de perguntas alt D: ' +  this.pergunta.alternativaCorreta);

    this.grupoSelecionado = '';
    this.perguntaPagina = '';
    this.altA = '';
    this.altB = '';
    this.altC = '';
    this.altD = '';
    this.altCorreta = '';



  }

  logForm():void{
    console.log(this.formAtividade);
  }

  nomeGrupos():void{

    //this.nomeGrupoDigitado = navParams.get('item');
  }

  onProximoPasso(): void{

    this.primeiraParte = false;
    this.segundaParte = true;

  }

  onPassoPerguntas(){

    this.segundaParte = false;
    this.terceiraParte = true;

  }

  onVoltarPasso(): void{

    this.primeiraParte = true;
    this.segundaParte = false;
  }

  finalizaCadastro(): void {
    this.navCtrl.push('AdminHomePage');
  }



}
