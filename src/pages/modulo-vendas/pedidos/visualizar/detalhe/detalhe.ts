import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'; 
/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,) {
    this.initializeProduto(); this.initializeItems()
  }
  items: any;
  produto: any;

  initializeItems() {
    this.items = [{
      "nome": "A22 - Frango Congelado 1.7 Encaixado",
      "preco": "R$ 5,00",
      "qtd": "200 KG",
      "id_produto": "1"
    },
    {
      "nome": "A22 - Ovo Industrial 6 ",
      "preco": "R$ 6,60",
      "qtd": "2500 BD",
      "id_produto": "2"
    },
    {
      "nome": "A26 - Ovo Branco Grande 7 ",
      "preco": "R$ 6,60",
      "qtd": "2500 BD",
      "id_produto": "2"
    },
    {
      "nome": "A52 - Ovo Preto 6 ",
      "preco": "R$ 6,60",
      "qtd": "2500 BD",
      "id_produto": "2"
    },
    {
      "nome": "A26 - Ovo Branco Grande 7 ",
      "preco": "R$ 6,60",
      "qtd": "2500 BD",
      "id_produto": "2"
    }]
  }
  initializeProduto() {
    this.produto = [{
      "numero": "377799",      
      "codigo": "673408",      
      "cliente": "Edvaldo Viera da Silva",
      "cod_cliente": "21350",
      "mensagem": "Motorista Erick",
      "status": "RECEBIDO", 
      "valor_pedido": "R$ 208,32",
      "valor_total": "R$ 208,32",
      "data": "27/04/2018", 
      "data_entrega": "29/04/2018",
      "data_vencimento": "05/05/2018"
    }]
  }  
  cliente(){
    let alerta = this.alertCtrl.create({
      title: ' ' + this.produto[0].cliente + ' ', 
      subTitle: 'Codigo do Cliente: ' + this.produto[0].cod_cliente + '<br>Codigo do Pedido: ' + this.produto[0].codigo,  
      buttons: ['Ok']
    }); 
    alerta.present();
  }

  data(){
    let alerta = this.alertCtrl.create({
      title: 'Data',
      subTitle: 'Pedido: ' + this.produto[0].data + '<br>Entrega: ' + this.produto[0].data_entrega +  '<br>Vencimento: ' + this.produto[0].data_vencimento,  
      buttons: ['Ok']
    }); 
    alerta.present();
  }

  valor(){
    let alerta = this.alertCtrl.create({
      title: 'Valor', 
      subTitle: 'Valor Pedido: ' + this.produto[0].valor_pedido + '<br>Valor Total: ' + this.produto[0].valor_total,  
      buttons: ['Ok']
    }); 
    alerta.present();
  }

}