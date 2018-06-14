import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// Classes
import { Client } from '../../classes/client';
// Services
import { ClientService } from '../../services/client.service';
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  sidebar = sidebar;
  client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.sidebar.zone = 2;
  }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const genders: string[] = ['Masculino', 'Femenino'];
    const id = +this.route.snapshot.paramMap.get('id');
    let client;
    this.clientService.getClient(id).subscribe(c => client = c);

    const clientCopy = new Client();
    clientCopy.id = client.id;
    clientCopy.name = client.name;
    clientCopy.lastName = client.lastName;
    clientCopy.gender = genders.indexOf(client.gender).toString();
    clientCopy.stringBirthdate = client.stringBirthdate;
    clientCopy.timestamp = client.timestamp;
    clientCopy.email = client.email;

    this.client = clientCopy;
  }

  updateClient(): void {
    this.clientService.updateClient(this.client);
    this.router.navigateByUrl('/clients/' + this.client.id);
  }

  goBack(): void {
    this.location.back();
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
