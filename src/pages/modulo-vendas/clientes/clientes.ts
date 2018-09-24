import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { PedidoPage } from '../clientes/venda/pedido/pedido/pedido';
import { InformacoesPage } from '../clientes/venda/informacoes/informacoes'; 
import * as firebase from 'firebase';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})


export class ClientesPage {

  searchQuery: string = '';
  items: any[];
  cnpj: string[];
  id: string[];
  private db: any;
  data = [];
  indiceSelecionado;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {
    this.db = firebase.firestore();
    this.initializeItems(); 
    this.loadData()
  }

  loadData() {
    this.recuperarDadosClientes("clientes").then((e) => {
      // this.data = e;  
      // console.log(this.data);
      // console.log(this.data[0]);
    });
  }

  recuperarDadosClientes(collection: String) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).limit(15).get().then(
        (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(
            (function (doc) {
              var obj = JSON.parse(JSON.stringify(doc.data()));
              obj.$key = doc.id              
              // console.log(obj) 
              arr.push(obj);
              // this.data.push(obj);
            }))

                // for (let i = 0; i < arr.length; i++) {
                //   const element = arr[i];
                //   console.log(arr[i].bairro)
                // } 

            this.data = arr;
            //console.log(this.data)
          if (arr.length > 0) { 
          } else {
            console.log("Documento não encontrado");
            resolve(null);
          }
        }
      ).catch((error: any) => {
        reject(error);
      });
    })
  }



  recuperarDadosInformacoes(collection: String) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).limit(15).get().then(
        (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(
            (function (doc) {
              var obj = JSON.parse(JSON.stringify(doc.data()));
              obj.$key = doc.id              
              // console.log(obj) 
              arr.push(obj);
              // this.data.push(obj);
            }))
            // console.log(arr[1].bairro);
            this.data = arr;
          if (arr.length > 0) { 
          } else {
            console.log("Documento não encontrado");
            resolve(null);
          }
        }
      ).catch((error: any) => {
        reject(error);
      });
    })
  }


  initializeItems() {
  }
 
  e(i){
    this.indiceSelecionado = i;     
  }

  getItems(ev: any) {

    this.initializeItems();


    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        if (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.codigoCliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.codigoCliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

      })

    }
  }


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [


        {
          text: 'Informações',
          role: 'destructive',
          handler: () => {
           
            //this.recuperarDadosInformacoes(this.idSelecionado)
            // console.log(this.data)
            this.navCtrl.push(InformacoesPage, { 
              id: this.data[this.indiceSelecionado]
            });
            

          }
        },
        {
          text: 'Financeiro',
          role: 'destructive',
          handler: () => {
            // this.navCtrl.push(FinanceiroPage);
            let alert = this.alertCtrl.create({
              title: "Financeiro!",
              subTitle: 'Código: 123456 <p></p> Cliente: Fulano </p> Cod_Cliente: 12345 </p> Situação: VENCIDO </p> Valor: 648.0 </p> Data Pedido: 00/00/2018 </p> Entrega: 00/00/2018 </p> Vencimento: 00/00/2018',
              buttons: ['OK']
            });
            alert.present();
          }
        }, {



          text: 'Incluir Pedido',
          handler: () => {
            let actionSheet = this.actionSheetCtrl.create({
              title: 'Pedido',
              buttons: [
                {
                  text: 'Ovos Comerciais',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Frango Abatido',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Queijo',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Galinha Abatida',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Cajuina',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                }, {
                  text: 'Cancelar',
                  role: 'destructive'
                }
              ]
            });
            actionSheet.present();
          }


        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
