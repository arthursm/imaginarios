import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { MyApp } from './app.component';
 
import { VendasPage } from '../pages/modulo-vendas/vendas/vendas';  
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http"
import { BrMaskerModule } from 'brmasker-ionic-3';
import { LoginPage } from '../pages/login/login';
import { RecuperarDadosProvider } from '../providers/recuperar-dados/recuperar-dados';
import { ClientesPage } from '../pages/modulo-vendas/clientes/clientes';  
import { ProdutosPage } from '../pages/modulo-vendas/produtos/produtos';
import { PesquisasPage } from '../pages/modulo-vendas/pesquisas/pesquisas';
import { SincronizarPage } from '../pages/modulo-vendas/sincronizar/sincronizar';
import { PedidosPage } from '../pages/modulo-vendas/pedidos/pedidos';
import { TabelasPage } from '../pages/modulo-vendas/tabelas/tabelas';
import { SubprodutosPage } from '../pages/modulo-vendas/pesquisas/subpesquisas/subprodutos/subprodutos';
import { SupermercadosPage } from '../pages/modulo-vendas/pesquisas/subpesquisas/supermercados/supermercados';
import { SubprecosPage } from '../pages/modulo-vendas/pesquisas/subpesquisas/subprecos/subprecos';
import { FinanceiroPage } from '../pages/modulo-vendas/clientes/venda/financeiro/financeiro';
import { DetalhePage } from '../pages/modulo-vendas/pedidos/visualizar/detalhe/detalhe';  
import { PedidoPage } from '../pages/modulo-vendas/clientes/venda/pedido/pedido/pedido';
import { InformacoesPage } from '../pages/modulo-vendas/clientes/venda/informacoes/informacoes';
import { IncluirPedidoPage } from '../pages/modulo-vendas/clientes/venda/pedido/incluir-pedido/incluir-pedido';
import { ItensPage } from '../pages/modulo-vendas/clientes/venda/pedido/itens/itens';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCQJ9BoVvSFHfKGJAqLhivOx6wu6lGROH8",
  authDomain: "tijucamobilehomologacao.firebaseapp.com",
  databaseURL: "https://tijucamobilehomologacao.firebaseio.com",
  projectId: "tijucamobilehomologacao",
  storageBucket: "tijucamobilehomologacao.appspot.com",
  messagingSenderId: "778851398216"
}); 

@NgModule({ 
  declarations: [
    MyApp, 
    VendasPage, 
    LoginPage,
    ClientesPage,
    PedidosPage,
    PesquisasPage,
    ProdutosPage,
    SincronizarPage,
    SubprodutosPage,
    SupermercadosPage,
    SubprecosPage,
    FinanceiroPage, 
    PedidoPage,
    InformacoesPage,
    IncluirPedidoPage,
    ItensPage,
    TabelasPage,
    DetalhePage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    CustomFormsModule,
    FormsModule, 
    HttpClientModule,
    BrMaskerModule,
    HttpModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    VendasPage, 
    LoginPage,
    ClientesPage,
    PedidosPage,
    PesquisasPage,
    ProdutosPage,
    SincronizarPage,
    SubprodutosPage,
    SupermercadosPage,
    SubprecosPage,
    FinanceiroPage,
    PedidoPage,
    InformacoesPage,
    IncluirPedidoPage,
    ItensPage,
    TabelasPage,
    DetalhePage 
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    { provide: ErrorHandler, useClass: IonicErrorHandler }, 
    ScreenOrientation, 
    HttpClient, 
    RecuperarDadosProvider,
  ]
})
export class AppModule { }