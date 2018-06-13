import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService} from '../../services/client.service';
import { Client } from '../../classes/client';
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  client: Client;
  sidebar = sidebar;

  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.newClient();
  }

  newClient(): void {
    this.clientService.newClient().subscribe(client => this.client = client);
  }

  saveClient(): void {
    this.clientService.saveClient(this.client);
    this.router.navigateByUrl('/clients/' + this.client.id);
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
