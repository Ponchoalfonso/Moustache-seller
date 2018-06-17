import { ProductSale } from './product-sale';
import { Payment } from './payment';

export class Sale {

  public static last_index: number;

  public id: number;
  public producstSale: ProductSale[];
  public payment: Payment;
  public isPaid: boolean;
  public timestamp: Date;

  public constructor() {
    this.producstSale = [];
    this.isPaid = false;
  }

  public getTotal(): number {
    let total = 0;
    for (let i; i < this.producstSale.length; i++) {
      total += this.producstSale[i].getTotal();
    }

    return total;
  }

}
