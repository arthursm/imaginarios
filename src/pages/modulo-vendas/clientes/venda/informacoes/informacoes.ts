import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.initializeItems()

  }

  items: any;

  initializeItems() {
    this.items = [{
      "cliente": "Fulano",
      "endereco": "Rua AaBbCc, N° 0000",
      "telefone": "(99) 9-9999-9999",
      "grupo_produto": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango",
      "categoria": "1",
      "credito": "R$ 1.000,00",
      "saldo": "R$ 1.000,00",
      "prazo": "0"
    }]
  }

}
