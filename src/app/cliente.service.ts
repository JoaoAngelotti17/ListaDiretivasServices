import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl: string = 'http://localhost:3000/clientes'
  cliente: object = {
    nome: "João Pedro Timo Angelotti Pinto",
    rg: "33.333.333-3",
    cpf: "444.444.444-44",
    email: "admin@gmail.com",
    telefone: "(99)99999-9999",
    celular: "(99)99999-9999",
    cep: "18119-152",
    endereco: "rua das laranjeiras",
    numero: "154",
    complemento: "Fábrica da Pepsi",
    bairro: "Jardim Zulmira",
    cidade: "Sorocaba",
    estado: "SP"
  }

  constructor() { }

  async getClientes() {
    return await fetch(this.apiUrl).then(res =>
      res.json())
  }

  async getCliente(client_id: number) {
    return await fetch(`${this.apiUrl}/${client_id}`).then(res =>
      res.json())
  }

  async setCliente() {
    return await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.cliente)
    }).then(res =>
      res.json())
  }

  async atualizarCliente() {
    return await fetch(this.apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.cliente)
    }).then(res =>
      res.json())
  }

  async excluiCliente(client_id: number) {
    return await fetch(`${this.apiUrl}/${client_id}`, { method: 'DELETE' }).then(res =>
      res.json())
  }
}