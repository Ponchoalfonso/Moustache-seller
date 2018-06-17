import { Product } from './product';

export class ProductSale {

  public id: number;
  public product: Product;
  public productQuantity: number;

  constructor() { }

  public getTotal(): number {
    const total = this.product.price * this.productQuantity;

    return total;
  }

}
