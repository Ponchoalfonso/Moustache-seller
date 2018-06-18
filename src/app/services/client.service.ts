import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Formater } from '../classes/formater';
// Provided data
import { Client } from '../classes/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Client[];

  constructor() {
    this.clients = [];
  }

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }

  getClient(id: number): Observable<Client> {
    const client = this.clients.find(c => c.id === id);

    return of(client);
  }

  newClient(): Observable<Client> {
    const client = new Client();

    return of(client);
  }

  saveClient(client: Client): void {
    if (Client.last_index >= 1) {
      Client.last_index++;
    } else {
      Client.last_index = 1;
    }

    client.id = Client.last_index;
    client.timestamp = new Date();

    this.clients.push(client);
  }

  updateClient(client: Client): void {
    const cf = this.clients.find(c => c.id === client.id);
    const ci = this.clients.indexOf(cf);

    this.clients[ci] = client;
  }

  deleteClient(id: number): void {
    const client = this.clients.find(c => c.id === id);
    const index = this.clients.indexOf(client);
    this.clients.splice(index, 1);
  }

}
