import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { ClientService} from '../../services/client.service';
// Classes
import { Client } from '../../classes/client';
import { Formater } from '../../classes/formater';
// Control
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  client: Client;
  stringBirthdate: string;
  sidebar = sidebar;

  constructor(
    private clientService: ClientService,
    private router: Router,
  ) {
    this.sidebar.zone = 2;
  }

  ngOnInit() {
    this.newClient();
  }

  newClient(): void {
    this.clientService.newClient().subscribe(client => this.client = client);
  }

  saveClient(): void {
    this.client.birthdate = Formater.stringToDate(this.stringBirthdate);
    this.clientService.saveClient(this.client);
    this.router.navigateByUrl('/clients/' + this.client.id);
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
