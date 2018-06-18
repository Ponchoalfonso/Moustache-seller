import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { SaleService } from '../../services/sale.service';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
// Classes
import { Sale } from '../../classes/sale';
import { Payment } from '../../classes/payment';
import { ProductSale } from '../../classes/product-sale';
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

  sale: Sale;
  sidebar = sidebar;

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
  }

  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.saleService.getSale(id).subscribe(sale => this.sale = sale);
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
