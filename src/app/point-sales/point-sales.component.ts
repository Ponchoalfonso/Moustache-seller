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
import { Formater } from '../classes/formater';
// Sidebar
import { sidebar } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-point-sales',
  templateUrl: './point-sales.component.html',
  styleUrls: ['./point-sales.component.css']
})
export class PointSalesComponent implements OnInit {

  products: Product[];
  sales: Sale[];
  selectedSale: Sale;
  selectedSaleProducts: Product[];
  selectedSalePayment: Payment;
  selectedProduct: Product;
  sidebar = sidebar;

  constructor(
    private productService: ProductService,
    private paymentService: PaymentService,
    private saleService: SaleService
  ) {
    this.sidebar.zone = 0;
    this.sales = [];
    this.selectedSaleProducts = [];
  }

  ngOnInit() {
    this.getUnpaidSales();
    this.getProducts();
    if (this.sales.length === 0) {
      this.newSale();
    } else if (this.sales.length > 0) {
      this.selectSale(this.sales[0].id);
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
    this.selectedSale.payment_id = payment.id;
  }

  deleteSale(): void {
    this.sales.splice(this.sales.indexOf(this.selectedSale), 1);
    this.saleService.deleteSale(this.selectedSale.id);
    this.paymentService.deletePayment(this.selectedSale.payment_id);
    if (this.sales.length < 1) {
      this.newSale();
    } else if (this.sales.length > 0) {
      this.selectSale(this.sales[0].id);
    }
  }

  addProductToSale(id: number): void {
    if (this.selectedSale !== undefined) {
      const index = this.selectedSale.products_id.findIndex(pid => pid === id);

      if (index === -1) {
        const product = this.products.find(p => p.id === id);

        this.selectedSale.products_id.push(id);
        this.selectedSale.productsQuantity.push(1);
        this.selectedSaleProducts.push(product);
        this.selectedProduct = product;

      } else if (index !== -1) {
        this.selectedSale.productsQuantity[index]++;
        this.selectedProduct = this.selectedSaleProducts[index];
      }
      this.updatePayment();
    }
  }

  selectSale(id: number): void {
    this.selectedSale = this.sales.find(sale => sale.id === id);
    this.selectedSaleProducts = this.getSelectedSaleProducts();
    this.paymentService.getPayment(this.selectedSale.payment_id)
      .subscribe(payment => this.selectedSalePayment = payment);

    const productId = this.selectedSale.products_id[0];
    this.selectProduct(productId);

  }

  private getSelectedSaleProducts(): Product[] {
    const products: Product[] = [];

    for (let i = 0; i < this.selectedSale.products_id.length; i++) {
      products.push(
        this.products
          .find(product => product.id === this.selectedSale.products_id[i])
      );
    }

    return products;
  }

  private updatePayment(): void {
    if (this.selectedSalePayment !== undefined) {
      this.selectedSalePayment.amount = 0;
      for (let i = 0; i < this.selectedSaleProducts.length; i++) {
        this.selectedSalePayment.amount +=
          (
            this.selectedSaleProducts[i].price *
            this.selectedSale.productsQuantity[i]
          );
      }
    }
  }

  selectProduct(id): void {
    this.selectedProduct = this.products.find(product => product.id === id);
  }

  removeProduct(): void {

    if (this.selectedProduct !== undefined) {
      const index = this.selectedSaleProducts.findIndex(
        product => product.id === this.selectedProduct.id
      );

      this.selectedSale.products_id.splice(index, 1);
      this.selectedSale.productsQuantity.splice(index, 1);
      this.selectedSaleProducts.splice(index, 1);

      const productId = this.selectedSale.products_id[0];
      this.selectProduct(productId);

      this.updatePayment();
    }
  }

  changeQuantity(value: string): void {
    if (this.selectedProduct !== undefined) {
      const posibilities = '0123456789';
      const index = this.selectedSale.products_id
        .indexOf(this.selectedProduct.id);
      let quantity = this.selectedSale.productsQuantity[index].toString();

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

      this.selectedSale.productsQuantity[index] = parseInt(quantity, 10);
      this.updatePayment();
    }
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

}
