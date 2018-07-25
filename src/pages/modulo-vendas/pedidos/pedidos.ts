import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from '../pedidos/visualizar/detalhe/detalhe';
/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }
  items: any;

  initializeItems() {
    this.items = [{
      "id": "30",      
      "nome": "Edvaldo Viera da Silva",
      "preco": "R$ 208,32",
      "data": "27/04/2018", 
      "status": "RECEBIDO"
    },{ 
      "id": "31",            
      "nome": "Francisco Ivan de Aguiar",
      "preco": "R$ 277,44",
      "data": "27/04/2018", 
      "status": "CANCELADO"
    },{
      "id": "33",            
      "nome": "Edvaldo Viera da Silva",
      "preco": "R$ 208,32",
      "data": "27/04/2018", 
      "status": "RECEBIDO"
    }]
  }


  e(item) {
    console.log(item)
  } 

  linkDetalhe() {   
    this.navCtrl.push(DetalhePage);
  } 
 
}
