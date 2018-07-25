import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubprodutosPage } from '../subprodutos/subprodutos';

@IonicPage()
@Component({
  selector: 'page-supermercados',
  templateUrl: 'supermercados.html',
})
export class SupermercadosPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }
  
  initializeItems() {
    this.items = [{
      "codigo": "18805",
      "nome": "FRANGOLANDIA",
      "endereco": "CE-040",
      "local": "Eusébio"
    },
    {
      "codigo": "B767",
      "nome": " Jals",
      "endereco": "Mister Hull",
      "local": "Antônio Bezerra"
    },
    {
      "codigo": "21214",
      "nome": "Super Mercados R. B.",
      "endereco": "Rua Coronel Antonio",
      "local": "Centro5"
    },
    {
      "codigo": "C680",
      "nome": "Super Portugal",
      "endereco": "Rua Bragança 87418",
      "local": "Granja Portugal"
    }]
  }


  e(item) {   
    this.navCtrl.push(SubprodutosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupermercadosPage');
  }

}
