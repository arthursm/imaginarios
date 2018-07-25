import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'incluir-pedido',
  templateUrl: 'incluir-pedido.html'
})
export class IncluirPedidoPage {

  constructor(
    public navCtrl: NavController,
  ) {
    this.initializeItems()

  }

  items: any;

  initializeItems() {
    this.items = [{
      "pedido": "00000" ,
      "data": "00/00/2018",
      "chegada": "00/00/2018",
      "credito": "R$ 1.000,00",
      "saldo": "R$ 1.000,00",
      "categoria": "1",
      "qnt_item": "0",
      "valor": "0",
      "data_entrega": "00/00/2018"
    }]
  } 

}
