import { Component, OnInit } from '@angular/core';
// Services
import { ProductService } from '../services/product.service';
import { PaymentService } from '../services/payment.service';
import { SaleService } from '../services/sale.service';
import { ClientService } from '../services/client.service';
// Classes
import { Product } from '../classes/product';
import { Payment } from '../classes/payment';
import { Sale } from '../classes/sale';
import { Client } from '../classes/client';
import { ProductSale } from '../classes/product-sale';
import { Formater } from '../classes/formater';
// Sidebar
import { sidebar } from '../sidebar/sidebar.component';

export const toggles = { payment: false, clients: false };
export const point_sale_exports = { client: undefined };

@Component({
  selector: 'app-point-sales',
  templateUrl: './point-sales.component.html',
  styleUrls: ['./point-sales.component.css']
})
export class PointSalesComponent implements OnInit {

  products: Product[];
  sales: Sale[];
  selectedSale: Sale;
  selectedProductSale: ProductSale;
  exports = point_sale_exports;
  sidebar = sidebar;
  toggles = toggles;

  constructor(
    private productService: ProductService,
    private paymentService: PaymentService,
    private saleService: SaleService,
    private clientService: ClientService
  ) {
    this.sidebar.zone = 0;
    this.sales = [];
  }

  ngOnInit() {
    this.getUnpaidSales();
    this.getProducts();
    if (this.sales.length === 0) {
      this.newSale();
    } else if (this.sales.length > 0) {
      this.selectSale(this.sales[0].id);
    }
    if (this.toggles.clients) {
      this.toggleClients();
    }
    if (this.toggles.payment) {
      this.togglePayment();
    }
  }

  getUnpaidSales() {
    this.saleService.getSalesWhere('isPaid', false)
      .subscribe(sales => this.sales = sales);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  newSale(): void {
    let payment: Payment;

    this.saleService.newSale().subscribe(sale => this.sales.push(sale));
    this.paymentService.newPayment().subscribe(p => payment = p);
    this.selectSale(this.sales[this.sales.length - 1].id);
    this.selectedSale.payment = payment;
  }

  deleteSale(): void {
    if (this.exports.client !== undefined) {
      const index = this.exports.client.sales.indexOf(this.selectedSale);
      this.exports.client.sales.splice(index, 1);
    }
    this.sales.splice(this.sales.indexOf(this.selectedSale), 1);
    this.paymentService.deletePayment(this.selectedSale.payment.id);
    this.saleService.deleteSale(this.selectedSale.id);
    if (this.sales.length < 1) {
      this.newSale();
    } else if (this.sales.length > 0) {
      this.selectSale(this.sales[0].id);
    }
  }

  selectSale(id: number): void {
    this.selectedSale = this.sales.find(sale => sale.id === id);
    this.selectedProductSale = this.selectedSale.productsSale[0];
    this.getAssignedClient();
  }

  addProductToSale(product: Product): void {
    if (this.selectedSale !== undefined) {
      this.selectedSale.addProduct(product);
      this.selectedProductSale = this.selectedSale
        .productsSale.find(ps => ps.product === product);
    }
  }

  removeProduct(): void {
    if (this.selectedProductSale !== undefined) {
      this.selectedSale.removeProduct(this.selectedProductSale);
      if (this.selectedSale.productsSale.length > 0) {
        this.selectedProductSale = this.selectedSale.productsSale[0];
      }
    }
  }

  selectProductSale(id): void {
    this.selectedProductSale = this.selectedSale.productsSale
      .find(ps => ps.id === id);
  }

  changeQuantity(value: string): void {
    if (this.selectedProductSale !== undefined) {
      const posibilities = '0123456789';
      let quantity = this.selectedProductSale.productQuantity.toString();

      if (value === '.') {
        if (quantity.indexOf(value) === -1) {
          quantity += value;
        }
      } else if (posibilities.indexOf(value) !== -1) {
         if (quantity === '0') {
           quantity = value;
         } else {
           quantity += value;
         }
      } else if (value === 'bs') {
        quantity = quantity.slice(0, -1);
      }

      if (quantity === '') {
        quantity = '0';
      }

      this.selectedSale.setProductQuantity(
        this.selectedProductSale,
        parseFloat(quantity)
      );
    }
  }

  private getAssignedClient(): void {
    let clients: Client[];
    this.clientService.getClients()
      .subscribe(c => clients = c);
    this.exports.client = clients.find(
      client => client.sales.indexOf(this.selectedSale) !== -1
    );
  }

  formatTime(date: Date): string {
    return Formater.formatTime(date);
  }

  maxLength(value: string, max: number): string {
    return Formater.maxLength(value, max);
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

  toggleClients(): void {
    if (this.toggles.clients) {
      this.toggles.clients = false;
    } else {
      this.toggles.clients = true;
    }
  }

  togglePayment(): void {
    if (this.toggles.payment) {
      this.toggles.payment = false;
    } else {
      this.toggles.payment = true;
    }
  }

}
