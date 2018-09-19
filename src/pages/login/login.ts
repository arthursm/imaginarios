import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { GooglePlus } from '@ionic-native/google-plus';  
import { VendasPage } from '../modulo-vendas/vendas/vendas';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoadingController } from 'ionic-angular';
  
import { HttpClient } from '@angular/common/http';  
 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html', 
  providers: [GooglePlus]
})

export class LoginPage { 
 
  public itens: Array<any> = [];
  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn:boolean = false;
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    public http: HttpClient,
    private googlePlus: GooglePlus, 
    private nativeStorage: NativeStorage,
    public loadingCtrl: LoadingController
  ) {
  }
  
 
  loginGoogle(){
    this.navCtrl.push(VendasPage);
  }
 
  login() {
    this.presentLoading();
    this.googlePlus.login({})
      .then(res => {
        console.log(res);

        this.nativeStorage.setItem('dadosVendedor', {email: res.email, displayName: res.displayName})
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      
      })
      .then( () => this.navCtrl.setRoot(VendasPage))
      .catch(
        () =>{
          this.navCtrl.setRoot(VendasPage);
        }
      );
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor, espere...",
      // duration: 3000
      dismissOnPageChange: true

    });
    loader.present();
  }

}