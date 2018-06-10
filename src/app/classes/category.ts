import { Product } from './product';

export class Category {

  private static last_index: number;

  public id: number;
  public name: string;
  public products_id: number[];
  public timestamp: Date;

  public constructor() {
    if (Category.last_index >= 1) {
      Category.last_index++;
    } else {
      Category.last_index = 1;
    }

      this.products_id = new Array();
  }

}
