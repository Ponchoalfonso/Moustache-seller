export class Product {

  public static last_index: number;

  public id: number;
  public name: string;
  public price: number;
  private _measureType: string;
  public set measureType(index: string) {
    const types: string[] = ['Unidad', 'Granel'];

    this._measureType = types[parseInt(index, 10)];
  }
  public get measureType(): string {
    return this._measureType;
  }
  public timestamp: Date;

  public constructor() { }

}
