import { Product } from './product';
import { Payment } from './payment';

export class Sale {

  private payment: Payment;

  public id: number;
  public products: Product[];
  public get total(): number {
    let total = 0;

    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].total;
    }

    return total;
  }
  public get isPaid(): boolean {
    return this.payment.isPaid;
  }

  public constructor() {
    this.products = [];
    this.payment = new Payment();
  }

  public addProduct(product: Product): void {
    this.products.push(product);
    this.setAmount();
  }

  public addProducts(product: Product[]): void {
    this.products.concat(product);
    this.setAmount();
  }

  public pay(givenAmount: number): boolean {
    return this.payment.validate(givenAmount);
  }

  private setAmount(): void {
    this.payment.amount = this.total;
  }

}
