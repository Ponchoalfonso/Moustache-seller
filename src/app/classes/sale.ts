import { ProductSale } from './product-sale';
import { Payment } from './payment';
import { Product } from './product';

export class Sale {

  public static last_index: number;

  public id: number;
  public productsSale: ProductSale[];
  public payment: Payment;
  public isPaid: boolean;
  public timestamp: Date;

  public constructor() {
    this.productsSale = [];
    this.isPaid = false;
  }

  public getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.productsSale.length; i++) {
      total += this.productsSale[i].getTotal();
    }

    return total;
  }

  public addProduct(product: Product): void {
    const index = this.productsSale
      .findIndex(ps => ps.product.id === product.id);

    if (index === -1) {
      const productSale = new ProductSale();
      productSale.product = product;
      productSale.productQuantity = 1;

      this.productsSale.push(productSale);

    } else if (index !== -1) {
      this.productsSale.find(ps => ps.product === product).productQuantity++;
    }

    this.payment.amount = this.getTotal();
  }

  public removeProduct(productSale: ProductSale): void {
    const index = this.productsSale.indexOf(productSale);
    this.productsSale.splice(index, 1);
    this.payment.amount = this.getTotal();
  }

  public setProductQuantity(productSale: ProductSale, quantity: number): void {
    const index = this.productsSale.indexOf(productSale);

    if (index !== -1) {
      this.productsSale[index].productQuantity = quantity;
    }

    this.payment.amount = this.getTotal();
  }

}
