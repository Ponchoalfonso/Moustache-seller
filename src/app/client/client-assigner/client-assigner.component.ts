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
  @Input() imports: any;
  clients: Client[];
  toggles = toggles;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  assignClientToSale(id: number): void {
    this.unassignClient();
    const client = this.clients.find(c => c.id === id);
    client.sales.push(this.sale);
    this.imports.client = client;
  }

  unassignClient(): void {
    if (this.imports.client !== undefined) {
      const index = this.imports.client.sales.indexOf(this.sale);
      if (index > -1) {
        this.imports.client.sales.splice(index, 1);
        this.imports.client = undefined;
      }
    }
  }

  toggleClients(): void {
    if (this.toggles.clients) {
      this.toggles.clients = false;
    } else {
      this.toggles.clients = true;
    }
  }

}
