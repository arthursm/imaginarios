import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubprecosPage } from '../subprecos/subprecos';
/**
 * Generated class for the SubprodutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subprodutos',
  templateUrl: 'subprodutos.html',
})
export class SubprodutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }
  items: any;
  initializeItems() {
    this.items = [
      {"nome": "A22 - Frango Congelado 1.7 Encaixado"},
      {"nome": "A02 - Ovos brancos comerciais de galinhas"},
      {"nome": "012 - Ovo super extra branco c/30"},
      {"nome": "015 - Ovo pequeno branco c/30"},
      {"nome": "021 - Ovo super extra vermelho c/30"}
    ]
  } 
 
  e(item) {   
    this.navCtrl.push(SubprecosPage);
  } 

}
