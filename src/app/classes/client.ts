import { Product } from './product';
import { Sale } from './sale';

export class Client {

  id: number;
  name: string;
  genderIndex: number;
  birthdate: Date;
  sales: Sale[];
  get gender() {
    const genders: string[] = ['Hombre', 'Mujer'];
    return genders[this.genderIndex];
  }
  get age() {
    const age: number = (Date.now() - this.birthdate.getMilliseconds()) / (1000 * 3600 * 24) / 365;

    return age;
  }

  constructor(id: number, name: string, genderIndex: number, birthdate: Date) {
    this.id = id;
    this.name = name;
    this.genderIndex = genderIndex;
    this.birthdate = birthdate;
    this.sales = [];
  }

  addSale(sale: Sale): void {
    this.sales.push(sale);
  }

  addSales(sales: Sale): void {
    this.sales.concat(sales);
  }

}
