import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    return of(this.clients.find(client => client.id === id));
  }

  newClient(): Observable<Client> {
    const client = new Client();
    this.clients.push(client);

    return of(client);
  }

  deleteClient(id: number): void {
    const client = this.clients.find(c => c.id === id);
    const index = this.clients.indexOf(client);
    this.clients.splice(index, 1);
  }

}
