import { Product } from './product';

export class ProductSale {

  public static last_index: number;

  public id: number;
  public product: Product;
  public productQuantity: number;

  constructor() {
    if (ProductSale.last_index >= 1) {
      ProductSale.last_index++;
    } else {
      ProductSale.last_index = 1;
    }

    this.id = ProductSale.last_index;
  }

  public getTotal(): number {
    const total = this.product.price * this.productQuantity;

    return total;
  }

}
