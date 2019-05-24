import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-user-localiza-grupo-perguntas',
  templateUrl: 'user-localiza-grupo-perguntas.html',
})
export class UserLocalizaGrupoPerguntasPage {

  barcodeResult : BarcodeScanResult;

  constructor(
    public barcodeScanner : BarcodeScanner,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLocalizaGrupoPerguntasPage');
  }

  onPainel(): void {
    this.navCtrl.push('UserPainelPage');
  }

  onGetBarcode(): void{
    this.barcodeScanner.scan()
      .then((barcodeResult : BarcodeScanResult) =>{
        this.barcodeResult = barcodeResult;

      }).catch((error: Error) => {
        console.log('Erro no BarcodeScanner: ', error);
      });
  }

}
