import { Product } from './product';
import { Payment } from './payment';

export class Sale {

  public id: number;
  public products_id: number[];
  public productsQuantity: number[];
  public payment_id: number;
  public timestamp: Date;

  public constructor() {
    this.products_id = [];
  }

}
