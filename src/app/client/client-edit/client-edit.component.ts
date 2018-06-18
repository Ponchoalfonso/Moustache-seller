import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// Classes
import { Client } from '../../classes/client';
import { Formater } from '../../classes/formater';
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
  stringBirthdate: string;
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

    this.client = Object.assign({}, client);
  }

  updateClient(): void {
    this.client.birthdate = Formater.stringToDate(this.stringBirthdate);
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
