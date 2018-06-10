import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Provided data
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() {
    this.products = [];
   }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    return of(this.products.find(product => product.id === id));
  }

  newProduct(): Observable<Product> {
    const product = new Product();
    this.products.push(product);

    return of(product);
  }

  deleteProduct(id: number): void {
    const product = this.products.find(p => p.id === id);
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

}
