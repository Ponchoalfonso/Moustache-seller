import { Component, OnInit, Input } from '@angular/core';
// Services
import { ClientService } from '../../services/client.service';
import { SaleService } from '../../services/sale.service';
import { PaymentService } from '../../services/payment.service';
// Classes
import { Payment } from '../../classes/payment';
import { Sale } from '../../classes/sale';
import { Formater } from '../../classes/formater';
import { Client } from '../../classes/client';
// Control Vriables
import { toggles } from '../../point-sales/point-sales.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() imports: any;
  payment: Payment;
  toggles = toggles;

  constructor(
    private clientService: ClientService,
    private saleService: SaleService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.payment = this.imports.sale.payment;
  }

  validate(): void {

    const validated = this.payment.validate();
    this.imports.sale.isPaid = validated;

    if (validated) {
      const index = this.imports.sales.indexOf(this.imports.sale);

      this.imports.sales.splice(index, 1);

      if (this.imports.sales.length > 0) {
        this.imports.sale = this.imports.sales[0];
      } else {
        let sale: Sale;
        this.saleService.newSale().subscribe( (s) => {
          sale = s;
        });
        this.paymentService.newPayment().subscribe(( payment ) => {
          sale.payment = payment;
        });
        this.imports.sales.push(sale);
        this.imports.sale = sale;
      }
      this.getAssignedClient();
      this.togglePayment();
    }
  }

  changeAmount(value: string): void {
    if (this.payment !== undefined) {
      const posibilities = '0123456789';
      let quantity = this.payment.givenAmount.toString();

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

      this.payment.givenAmount = parseFloat(quantity);
    }
  }

  private getAssignedClient(): void {
    let clients: Client[];
    this.clientService.getClients()
      .subscribe(c => clients = c);
    this.imports.client = clients.find(
      client => client.sales.indexOf(this.imports.sale) !== -1
    );
  }

  maxLength(value: string, max: number): string {
    return Formater.maxLength(value, max);
  }

  togglePayment(): void {
    if (this.toggles.payment) {
      this.toggles.payment = false;
    } else {
      this.toggles.payment = true;
    }
  }

  toggleClients(): void {
    if (this.toggles.clients) {
      this.toggles.clients = false;
    } else {
      this.toggles.clients = true;
    }
  }

}
