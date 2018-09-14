import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../providers/storage/storage';
import * as firebase from 'firebase';
import 'firebase/firestore';

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
  private db: any;
  data = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storageProvider: StorageProvider,
  ) {
    this.db = firebase.firestore();
    this.initializeItems() 
    this.loadData()
  }
  
  loadData() {
    this.recuperarDadosClientes("usuarios").then((e) => {
      // this.data = e;  
      // console.log(this.data);
      // console.log(this.data[0]);
    });
  }

  recuperarDadosClientes(collection: String) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).get().then(
        (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(
            (function (doc) {
              var obj = JSON.parse(JSON.stringify(doc.data()));
              obj.$key = doc.id              
              console.log(obj) 
              console.log(arr) 
              arr.push(obj);
              // this.data.push(obj);
            }))
            // console.log(arr[1].bairro);
            this.data = arr;
          if (arr.length > 0) { 
          } else {
            console.log("Documento não encontrado");
            console.log(this.data);
            resolve(null);
          }
        }
      ).catch((error: any) => {
        reject(error);
      });
    })
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
