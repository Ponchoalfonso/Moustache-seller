import { Component, OnInit, Input } from '@angular/core';
// Classes
import { Sale } from '../../classes/sale';
import { Client } from '../../classes/client';
// Services
import { ClientService } from '../../services/client.service';
// Control Vriables
import { toggles } from '../../point-sales/point-sales.component';

@Component({
  selector: 'app-client-assigner',
  templateUrl: './client-assigner.component.html',
  styleUrls: ['./client-assigner.component.css']
})
export class ClientAssignerComponent implements OnInit {

  @Input() sale: Sale;
  clients: Client[];
  assignedClient: Client;
  toggles = toggles;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
    this.getAssginedClient();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  private getAssginedClient(): void {
    for (let i = 0; i < this.clients.length; i++) {
      const index = this.clients[i].sales_id.findIndex(s => s === this.sale.id);
      if (index !== -1) {
        this.assignedClient = this.clients[i];
        console.log(this.assignedClient);
        break;
      }
    }
  }

  assignClientToSale(id: number): void {
    const client = this.clients.find(c => c.id === id);
    console.log(client);

    client.sales_id.push(this.sale.id);
  }

  toggleClients(): void {
    if (this.toggles.clients) {
      this.toggles.clients = false;
    } else {
      this.toggles.clients = true;
    }
  }

}
