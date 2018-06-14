import { Component, OnInit } from '@angular/core';
// Services
import { SaleService } from '../../services/sale.service';
import { PaymentService } from '../../services/payment.service';
// Classes
import { Sale } from '../../classes/sale';
import { Payment } from '../../classes/payment';
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
  salesTotals: number[];
  sidebar = sidebar;

  constructor(
    private saleService: SaleService,
    private paymentService: PaymentService
  ) {
    this.sidebar.zone = 3;
  }

  ngOnInit() {
    this.getPaidSales();
  }

  getPaidSales(): void {
    let payments: Payment[];
    let sales: Sale[];
    const paidSales: Sale[] = [];

    this.paymentService.getPayments()
      .subscribe(p => payments = p);
    this.saleService.getSales().subscribe(s => sales = s);

    for (let i; i < payments.length; i++) {
      paidSales.push(sales.find(sale => sale.payment_id === payments[i].id));
    }
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
