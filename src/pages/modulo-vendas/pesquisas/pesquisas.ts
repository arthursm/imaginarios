import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SupermercadosPage } from '../pesquisas/subpesquisas/supermercados/supermercados';

@IonicPage()
@Component({
  selector: 'page-pesquisas',
  templateUrl: 'pesquisas.html',
})
export class PesquisasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisasPage');
  }
  superm(){    
    this.navCtrl.push(SupermercadosPage);
  }
}
