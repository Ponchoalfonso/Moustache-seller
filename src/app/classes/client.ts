import { Product } from './product';
import { Sale } from './sale';

export class Client {

  private static last_index: number;

  public id: number;
  public name: string;
  public lastName: string;
  private _gender: string;
  public set gender(index: string) {
    const genders: string[] = ['Masculino', 'Femenino'];

    this._gender = genders[parseInt(index, 10)];
  }
  public get gender() {
    return this._gender;
  }
  public birthdate: Date;
  public get age() {
    const age: number = (Date.now() - this.birthdate.getMilliseconds()) / (1000 * 3600 * 24) / 365;

    return age;
  }
  public email: string;
  public sales_id: number[];
  public timestamp: Date;

  public constructor() {
    if (Client.last_index >= 1) {
      Client.last_index++;
    } else {
      Client.last_index = 1;
    }

    this.sales_id = [];
  }

}
