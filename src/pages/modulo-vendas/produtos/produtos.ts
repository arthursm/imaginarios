import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  searchQuery: string = '';
  items: any[];
  codigo: string[];
  descricao: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storageProvider: StorageProvider) {
    this.initializeItems()
  }
  
  initializeItems() {
    this.items = this.storageProvider.listaVendasProdutos
  }

  e(item) {
    console.log(item)
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems(); 
    // set val to the value of the searchbar
    let val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => { 
        if (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.preco.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.preco.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.qtd.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.qtd.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        
      })

    }
  }



}
