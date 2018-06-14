import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Provided data
import { Payment } from '../classes/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payments: Payment[];

  constructor() {
    this.payments = [];
  }

  getPayments(): Observable<Payment[]> {
    return of(this.payments);
  }

  getPayment(id: number): Observable<Payment> {
    const payment = this.payments.find(p => p.id === id);

    return of(payment);
  }

  getPaymentsWhere(property: string, value: any): Observable<Payment[]> {
    const payments: Payment[] = [];

    for (let i = 0; i < this.payments.length; i++) {
      const payment = this.payments[i];
      for (const p in payment) {
        if (p === property && payment[p] === value) {
          console.log(p);
          payments.push(payment);
        }
      }
    }

    return of(payments);
  }

  newPayment(): Observable<Payment> {
    const payment = new Payment();

    if (Payment.last_index >= 1) {
      Payment.last_index++;
    } else {
      Payment.last_index = 1;
    }

    payment.id = Payment.last_index;
    payment.timestamp = new Date();
    this.payments.push(payment);

    return of(payment);
  }

  deletePayment(id: number): void {
    const payment = this.payments.find(p => p.id === id);
    const index = this.payments.indexOf(payment);
    this.payments.splice(index, 1);
  }

}
