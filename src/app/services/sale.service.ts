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
    return of(this.sales.find(sale => sale.id === id));
  }

  newSale(): Observable<Sale> {
    const sale = new Sale();
    this.sales.push(sale);

    return of(sale);
  }

  deleteSale(id: number): void {
    const sale = this.sales.find(s => s.id === id);
    const index = this.sales.indexOf(sale);
    this.sales.splice(index, 1);
  }

}
