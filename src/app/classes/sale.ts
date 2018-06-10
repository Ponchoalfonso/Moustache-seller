import { Product } from './product';
import { Payment } from './payment';

export class Sale {

  private static last_index: number;

  public id: number;
  public products_id: number[];
  public productsQuantity: number[];
  public payment_id: number;
  public get total() {
    let t = 0;
    for (let i; i < this.products_id.length; i++) {
      t += this.products_id[i] * this.productsQuantity[i];
    }

    return t;
  }
  public timestamp: Date;

  public constructor() {
    if (Sale.last_index >= 1) {
      Sale.last_index++;
    } else {
      Sale.last_index = 1;
    }
    this.products_id = [];
    this.productsQuantity = [];
  }

}
