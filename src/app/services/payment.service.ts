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
    return of(this.payments.find(payment => payment.id === id));
  }

  newPayment(): Observable<Payment> {
    const payment = new Payment();
    this.payments.push(payment);

    return of(payment);
  }

  deletePayment(id: number): void {
    const payment = this.payments.find(p => p.id === id);
    const index = this.payments.indexOf(payment);
    this.payments.splice(index, 1);
  }

}
