import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { SaleService } from '../../services/sale.service';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
// Classes
import { Sale } from '../../classes/sale';
import { Payment } from '../../classes/payment';
import { Product } from '../../classes/product';
import { Formater } from '../../classes/formater';
// Sidebar control
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-sale-show',
  templateUrl: './sale-show.component.html',
  styleUrls: ['./sale-show.component.css']
})
export class SaleShowComponent implements OnInit {

  sidebar = sidebar;
  sale: Sale;
  payment: Payment;
  products: Product[];

  constructor(
    private saleService: SaleService,
    private paymentService: PaymentService,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
    this.sidebar.zone = 3;
  }

  ngOnInit() {
    this.getSale();
    this.getPayment();
    this.getProducts();
  }

  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.saleService.getSale(id).subscribe(sale => this.sale = sale);
  }

  getPayment(): void {
    if (this.sale !== undefined) {
      this.paymentService.getPayment(this.sale.id)
        .subscribe(payment => this.payment = payment);
    }
  }

  getProducts(): void {
    this.products = [];
    for (let i = 0; i < this.sale.products_id.length ; i++) {
      this.productService.getProduct(this.sale.products_id[i])
        .subscribe(product => this.products.push(product));
    }
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
