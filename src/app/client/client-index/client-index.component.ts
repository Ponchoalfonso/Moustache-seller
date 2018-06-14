import { Component, OnInit } from '@angular/core';
import { Client } from '../../classes/client';
import { ClientService } from '../../services/client.service';

// Sidebar control
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {

  sidebar = sidebar;
  clients: Client[];

  constructor(private clientService: ClientService) {
    this.sidebar.zone = 2;
  }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id);
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
