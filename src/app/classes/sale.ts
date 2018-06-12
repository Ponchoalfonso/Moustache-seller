export class Sale {

  public static last_index: number;

  public id: number;
  public products_id: number[];
  public productsQuantity: number[];
  public payment_id: number;
  public timestamp: Date;

  public constructor() {
    this.products_id = [];
    this.productsQuantity = [];
  }

}
