export class Product {

  id: number;
  name: string;
  price: number;
  quantity: number;
  get total(): number {
    const total: number = this.price * this.quantity;

    return total;
  }

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = 0;
  }

}
