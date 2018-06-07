import { Product } from './product';
import { Payment } from './payment';

export class Sale {

  public id: number;
  public timestamp: Date;
  public products_id: number[];
  public payment_id: number;

  public constructor() {
    this.products_id = [];
  }

}
