import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  clientes: any = [];
  constructor(private server: ClienteService) {

  }
  async getClientes() {
    this.clientes = await this.server.getClientes()
    console.log(this.clientes);
  }
}
