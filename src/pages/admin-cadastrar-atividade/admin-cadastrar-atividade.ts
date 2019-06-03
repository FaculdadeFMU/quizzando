import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { e } from '@angular/core/src/render3';

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
  public idAtividade : string;

  //Recebe os valores da query
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
  private url: string ='http://localhost:8889/inputAtividade'
  private url1: string ='http://localhost:8889/getatividade'
  private urlInputGrupos: string ='http://localhost:8889/inputGrupos'
  private urlInputPerguntas : string = 'http://localhost:8889/inputPerguntas'


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
      this.idAtividade = data.insertId;
    }

  }

  async saveGroup(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(this.grupo).map((key) => {
      form.append(key,this.grupo[key]);
    })

   //Query dos grupos
   const res = await (await fetch(`${this.urlInputGrupos}?nomeGrupo=${this.grupo.nomeGrupo}&atividade_id=${this.grupo.atividade_id}`)).json();
   console.log(res.statusCode);
    if(res.statusCode == 200){
       const {data} = res;
       console.log('Grupo atual tem o codigo: ' + data.insertId);
       this.lstGrupos.push({nomeGrupo: this.nomeGrupoTela, atividade_id : this.idAtividade, id_grupo : data.insertId});
       console.log('Deu certo!');
    }

    //Limpa o campo na tela.
    this.nomeGrupoTela = '';
  }

  async saveQuestion(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const form = new FormData();
    Object.keys(this.grupo).map((key) => {
      form.append(key,this.grupo[key]);
    })

   //Query dos grupos
   const res = await (await fetch(`${this.urlInputPerguntas}?enunciado=${this.pergunta.pergunta}&alternativaA=${this.pergunta.alternativaA}&alternativaB=${this.pergunta.alternativaB}&alternativaC=${this.pergunta.alternativaC}&alternativaD=${this.pergunta.alternativaD}&altCorreta=${this.pergunta.alternativaCorreta}&grupoPerguntas_id=${this.pergunta.nomeGrupo}`)).json();
   console.log(res.statusCode);
   if(res.statusCode == 200){
       const {data} = res;
      console.log('Mano, a questão ta no banco já.. ');
      //Limpa os valores.
      this.grupoSelecionado = '';
      this.perguntaPagina = '';
      this.altA = '';
      this.altB = '';
      this.altC = '';
      this.altD = '';
      this.altCorreta = '';
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCadastrarAtividadePage');
  }

  addGroupList(): void {

    this.grupo = ({nomeGrupo: this.nomeGrupoTela, atividade_id : this.idAtividade});
    this.saveGroup();

    this.lstGrupos.forEach(function (item, indice, array) {
      console.log(item, indice);
    });
  }

  removeGroupList(): void {

  }

  adicionarPerguntas(): void{

    this.pergunta = {nomeGrupo : this.grupoSelecionado,
                    pergunta: this.perguntaPagina,
                    alternativaA : this.altA,
                    alternativaB : this.altB,
                    alternativaC : this.altC,
                    alternativaD : this.altD,
                    alternativaCorreta : this.altCorreta
                    };

      console.log('pergunta esta assim: ' + this.pergunta.alternativaA);

      this.saveQuestion();
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

  onPassoGrupoPerguntas(){

    this.saveActivity();
    this.primeiraParte = false;
    this.segundaParte = true;

  }

  onPassoPerguntas(){

    this.saveGroup();
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
