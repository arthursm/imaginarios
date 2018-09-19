import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesPage } from '../clientes/clientes';
import { PedidosPage } from '../pedidos/pedidos';
import { PesquisasPage } from '../pesquisas/pesquisas';
import { ProdutosPage } from '../produtos/produtos';
import { SincronizarPage } from '../sincronizar/sincronizar';
import { TabelasPage } from '../tabelas/tabelas'; 

/**
 * Generated class for the VendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendas',
  templateUrl: 'vendas.html',
})
export class VendasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var vfirstName  = 'ARTHUR';
  }

  /* Funções de link para outras páginas */
  
  linkClientes() {
    this.navCtrl.push(ClientesPage);
  }

  linkPedidos() {
    this.navCtrl.push(PedidosPage);
  }

  linkPesquisas() {
    this.navCtrl.push(PesquisasPage);
  }

  linkProdutos() {
    this.navCtrl.push(ProdutosPage);
  }

  linkSincronizar() {
    this.navCtrl.push(SincronizarPage);
  }

  linkTabelas() {
    this.navCtrl.push(TabelasPage);
  }
 
}
