import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Provided data
import { Sale } from '../classes/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  sales: Sale[];

  constructor() {
    this.sales = [];
  }

  getSales(): Observable<Sale[]> {
    return of(this.sales);
  }

  getSale(id: number): Observable<Sale> {
    const sale = this.sales.find(s => s.id === id);

    return of(sale);
  }

  getSalesWhere(property: string, value: any): Observable<Sale[]> {
    const obj = new Sale();
    const properties = Object.keys(obj);
    const propertyIndex = properties.indexOf(property);
    let values = [];

    for (let i; i < this.sales.length; i++) {
      values.push(Object.values(this.sales[i]));
    }

    values = values.filter(val => val[propertyIndex] === value);

    const sales: Sale[] = [];
    for (let i; i < values.length; i++) {
      sales.push(this.sales.find(sale => sale.id === values[i].id));
    }

    return of(sales);
  }

  newSale(): Observable<Sale> {
    const sale = new Sale();

    if (Sale.last_index >= 1) {
      Sale.last_index++;
    } else {
      Sale.last_index = 1;
    }

    sale.id = Sale.last_index;
    sale.timestamp = new Date();
    this.sales.push(sale);

    return of(sale);
  }

  deleteSale(id: number): void {
    const sale = this.sales.find(s => s.id === id);
    const index = this.sales.indexOf(sale);
    this.sales.splice(index, 1);
  }

}
