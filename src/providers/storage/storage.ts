import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';

@Injectable()
export class StorageProvider {

  page: MyApp;

  arrayLogin = []

  clientes: any = {
    nome: "",
    cnpj: 1,
    limite: 1,
    id: 1
  }

  vendasProdutos: any = {
    codigo: "",
    descricao: "" 
  }

  login: any = {
    id: 0,
    nome: "",
    vendas: 2,
    viagens: 2
  }

  //Recuperar dados 
  listaClientes: any[];
  listaLogin: any[]
  listaVendasProdutos: any[]


  chaveClientes = "vendasClientes";
  chaveVendasProdutos = "vendasProdutos";
  chaveLogin: string = "login"

  constructor(private storage: Storage) {

    this.storage.ready().then(() => {
      this.storage.get(this.chaveVendasProdutos).then((registros) => {
        if (registros) { this.listaVendasProdutos = registros; } else { this.listaVendasProdutos = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveClientes).then((registros) => {
        if (registros) { this.listaClientes = registros; } else { this.listaClientes = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveLogin).then((registros) => {
        if (registros) { this.listaLogin = registros; } else { this.listaLogin = []; }
      });
    });
  }

  // Retorna a lista 
  listarClientes() {
    return this.listaClientes;
  }
  listarVendasProdutos() {
    return this.listaVendasProdutos;
  }
  listarLogin() {
    return this.login;
  }
 
  adicionarClientes() {
    this.storage.ready().then(() => {
      this.listaClientes.push(this.clientes);
      this.storage.set(this.chaveClientes, this.listaClientes);
    });
  }

  adicionarVendasProdutos() {
    this.storage.ready().then(() => {
      this.listaVendasProdutos.push(this.vendasProdutos);
      this.storage.set(this.chaveVendasProdutos, this.listaVendasProdutos);
    });
  }
 

  // 1º vai ser o "Storage" que quer atualizar -- 2º os "Dados" que vai chegar do formulário
  // Atualizar determinados registros

  atualizarLogin(dados) {
    this.storage.set(this.chaveLogin, dados);
  }

  atualizarClientes(dados) {
    this.storage.set(this.chaveClientes, dados);
  }

  atualizarVendasProdutos(dados) {
    this.storage.set(this.chaveVendasProdutos, dados);
  }

  retornaLogin(): any {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveLogin).then((registros) => {
        if (registros) { this.listaLogin = registros; } else { this.listaLogin = []; }
      });
    });

  }

// ISSO É UM TESTE (Não delete)
  teste(){
    this.storage.length().then((data) => {
      return data
    })
  }
 
}
