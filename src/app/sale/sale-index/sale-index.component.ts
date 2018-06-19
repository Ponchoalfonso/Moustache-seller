import { Component, OnInit } from '@angular/core';
// Services
import { SaleService } from '../../services/sale.service';
// Classes
import { Sale } from '../../classes/sale';
import { Formater } from '../../classes/formater';
// Sidebar control
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-sale-index',
  templateUrl: './sale-index.component.html',
  styleUrls: ['./sale-index.component.css']
})
export class SaleIndexComponent implements OnInit {

  sales: Sale[];
  sidebar = sidebar;

  constructor( private saleService: SaleService ) {
    this.sidebar.zone = 3;
  }

  ngOnInit() {
    this.getPaidSales();
  }

  getPaidSales(): void {
    this.saleService.getSalesWhere('isPaid', true)
      .subscribe(sales => this.sales = sales);
  }

  dateFormat(date: Date): string {
    return Formater.dateFormat(date);
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
