import { Component } from '@angular/core';
import { IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';
import { StorageProvider } from '../../providers/storage/storage'; 
import { AlertController } from 'ionic-angular';
import { VendasPage } from '../modulo-vendas/vendas/vendas';
 
import { RecuperarDadosProvider } from '../../providers/recuperar-dados/recuperar-dados';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

import { SERVIDOR } from "../../util"; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html' 
})

export class LoginPage { 

  login = [];
  nickname = 'Nickelodeon';
  message = 'Oi!!!!!!';
  public itens: Array<any> = [];
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public http: HttpClient, 
    public alert: AlertController,
    public recuperarDados: RecuperarDadosProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController 
  ) {
  }

  public hideForm: boolean = false;
 
  
  erroLogin() {
    let alerta = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possivel logar no momento, favor teste sua conexão ou tente mais tarde',
      buttons: ['Ok']
    });
    alerta.present();
  }

  loginCorreto(dados) {


    this.storageProvider.atualizarLogin(dados) 
    try {
      
    if (this.storageProvider.listaLogin[0].vendas == 1) {

      this.recuperarDados.AtualizaClientes();
      this.recuperarDados.AtualizaVendasProdutos()
    }
    } catch (error) {
      console.log(error)
    }


    this.storageProvider.retornaLogin()
    this.navCtrl.push(VendasPage)

  }

  verificarLogin(usuario, senha) {

    let loading = this.loadingCtrl.create({
      content: 'Verificando se dados coincidem, aguarde'
    });

    //login: login[]
  
    //Isso é apenas um teste
  
  

    loading.present();

    if (usuario != '' && senha != '') {
      let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options: any = {
          "usuario": usuario,
          "senha": senha,
        },
        url: any = SERVIDOR + "login.php";


      try {
        this.http.post(url, JSON.stringify(options), headers)
          .subscribe((data: any) => {
            console.log(data);


            try {


              if (data[0].nomeValidado == true) {
                if (data[0].senhaValidada == true) {
                  this.loginCorreto(data)
                  loading.dismiss()
                } else {

                  let alerta = this.alertCtrl.create({
                    title: 'Falha',
                    subTitle: 'Senha incorreta',
                    buttons: ['Ok']
                  });
                  loading.dismiss()
                  alerta.present();
                }

              } else {
                let alerta = this.alertCtrl.create({
                  title: 'Falha',
                  subTitle: 'Verifique o nome de usuário',
                  buttons: ['Ok']
                });
                loading.dismiss()
                alerta.present();
              }


              this.hideForm = true;
            } catch (error) {
              loading.dismiss()
              console.log(error)
            }
          },
          (error: any) => {
            loading.dismiss()
            console.log(error)
            this.erroLogin()

          });
      }
      catch (error) {
        loading.dismiss()
        this.erroLogin()

      }
    } else {
      loading.dismiss()
      let alerta = this.alertCtrl.create({
        title: 'Falha',
        subTitle: 'Preencha todos os campos',
        buttons: ['Ok']
      });
      alerta.present();
    }

  } 
 
  loginGoogle(){
    this.navCtrl.push(VendasPage);
  }

  ionViewDidLoad() {
    this.storageProvider.retornaLogin()

   this.storage.ready().then(() => {
     this.storage.get(this.storageProvider.chaveLogin).then((registros) => {
       this.login = registros;
       //console.log(this.login)
       this.storageProvider.retornaLogin()

       if(this.login == null){ 
        this.storageProvider.retornaLogin()

      }else{ 
        this.navCtrl.push(VendasPage)
        this.storageProvider.retornaLogin()

      }
     });
   }); 
 

  }

}