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
    const product = this.products.find(p => p.id === id);

    return of(product);
  }

  newProduct(): Observable<Product> {
    const product = new Product();

    return of(product);
  }

  saveProduct(product: Product): void {
    if (Product.last_index >= 1) {
      Product.last_index++;
    } else {
      Product.last_index = 1;
    }

    product.id = Product.last_index;
    product.timestamp = new Date();

    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const pf = this.products.find(p => p.id === product.id);
    const pi = this.products.indexOf(pf);

    this.products[pi] = product;
  }

  deleteProduct(id: number): void {
    const product = this.products.find(p => p.id === id);
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

}
