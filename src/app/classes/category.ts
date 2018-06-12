export class Category {

  public static last_index: number;

  public id: number;
  public name: string;
  public products_id: number[];
  public timestamp: Date;

  public constructor() {
    this.products_id = new Array();
  }

}
