import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';  
import { VendasPage } from '../modulo-vendas/vendas/vendas';
  
import { HttpClient } from '@angular/common/http';  
 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html' 
})

export class LoginPage { 
 
  public itens: Array<any> = [];
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    public http: HttpClient
  ) {
  }
  
 
  loginGoogle(){
    this.navCtrl.push(VendasPage);
  }
 

}