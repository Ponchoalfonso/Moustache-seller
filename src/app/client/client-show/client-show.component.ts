import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// Classes
import { Client } from '../../classes/client';
import { Sale } from '../../classes/sale';
import { Formater } from '../../classes/formater';
// Services
import { ClientService } from '../../services/client.service';
import { SaleService } from '../../services/sale.service';
// Sidebar
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {

  sidebar = sidebar;
  client: Client;
  sales: Sale[];

  constructor(
    private clientService: ClientService,
    private saleService: SaleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id).subscribe(client => this.client = client);
  }

  getSales(): void {
    this.sales = [];
    for (let i = 0; i < this.client.sales_id.length ; i++) {
      this.saleService.getSale(this.client.sales_id[i])
        .subscribe(sale => this.sales.push(sale));
    }
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id);
    this.router.navigateByUrl('/clients');
  }

  formatDate(date: Date): string {
    return Formater.dateFormat(date);
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
