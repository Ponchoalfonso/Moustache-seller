import { Product } from './product';

export class Category {

  public static last_index: number;

  public id: number;
  public name: string;
  public products: Product[];
  public timestamp: Date;

  public constructor() {
    this.products = new Array();
  }

}
