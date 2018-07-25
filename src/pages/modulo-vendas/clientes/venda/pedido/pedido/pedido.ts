import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncluirPedidoPage } from '../incluir-pedido/incluir-pedido';
import { ItensPage } from '../itens/itens';

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  tab1Root = IncluirPedidoPage;
  tab2Root = ItensPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
