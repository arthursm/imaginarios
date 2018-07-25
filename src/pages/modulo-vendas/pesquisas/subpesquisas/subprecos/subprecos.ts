import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-subprecos',
  templateUrl: 'subprecos.html',
})
export class SubprecosPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public alertCtrl: AlertController) {
    this.initializeItems()
  }
  items: any;
 
  initializeItems() {
    this.items = [{
      "produto": "914 - ASA DE FRANGO CONGELADA",
      "mercadinho": "40 - CENTERBOX JOAO XVIII",
      "observacao": "Motorista Erick"
    },
    {
      "produto": "736 - MOELA CONGELADA 500G",
      "mercadinho": " 40 - CENTERBOX JOAO XVIII",
      "observacao": ""
    },
    {
      "produto": "748 - FILEZINHO SASSAMI CONGELADO 500G",
      "mercadinho": " 40 - CENTERBOX JOAO XVIII",
      "observacao": ""
    },
    {
      "produto": "739 - ASA CONGELADA 500G",
      "mercadinho": " 40 - CENTERBOX JOAO XVIII",
      "observacao": ""
    }]
  }
  adicionar() {
    let prompt = this.alertCtrl.create({
      title: 'Pesquisa', 
      inputs: [
        {
          name: 'concorrencia',
          placeholder: 'Concorrencia'
        }, {
          name: 'preco',
          placeholder: 'Preço R$'
        }
      ],
      cssClass: 'alerta',
      buttons: [
        {
          text: 'CANCELAR',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ADICIONAR',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ], 
    });
    prompt.present();
  }

}
