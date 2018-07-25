import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../../providers/storage/storage';
import { SERVIDOR } from "../../util";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Injectable()
export class RecuperarDadosProvider {

  public hideForm: boolean = false;

  constructor(
    public http: HttpClient,
    public storageProvider: StorageProvider,
    public loadingCtrl: LoadingController,
    public alert: AlertController
  ) {
  }


  AtualizaClientes(): void { 
 

    let loading = this.loadingCtrl.create({
      content: 'Fazendo download dos clientes, aguarde'
    });

    loading.present();

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "id": this.storageProvider.listaLogin[0].id
      },
      url: any = SERVIDOR + "vendas-clientes.php";

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarClientes(data);
          this.hideForm = true;
          loading.dismiss()

        },
        (error: any) => {
          // loading.dismiss()
          // let alerta = this.alert.create({
          //   title: 'Falha',
          //   subTitle: 'Clientes não pôde ser baixado!',
          //   buttons: ['Ok']
          // });
          // alerta.present();

        });
    } catch (error) { 
      // loading.dismiss()
      // let alerta = this.alert.create({
      //   title: 'Falha',
      //   subTitle: 'Clientes não pôde ser baixado!',
      //   buttons: ['Ok']
      // });
      // alerta.present();
    }

  }


  AtualizaVendasProdutos(): void {


    let loading = this.loadingCtrl.create({
      content: 'Fazendo download dos produtos, aguarde'
    });

    loading.present();

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "id": this.storageProvider.listaLogin[0].id
      },
      url: any = SERVIDOR;

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          this.storageProvider.atualizarVendasProdutos(data);
          this.hideForm = true;
          loading.dismiss()

        },
        (error: any) => {
          loading.dismiss()
          let alerta = this.alert.create({
            title: 'Falha',
            subTitle: 'Produtos não pôde ser baixado!' + error,
            buttons: ['Ok']
          });
          alerta.present();
          

        });
    } catch (error) {  

      loading.dismiss()
      let alerta = this.alert.create({
        title: 'Falha',
        subTitle: 'Produtos não pôde ser baixado!',
        buttons: ['Ok']
      });
      alerta.present();
    }

  }  
}
