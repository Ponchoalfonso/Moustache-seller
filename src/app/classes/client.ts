import { Sale } from './sale';

export class Client {

  public static last_index: number;

  public id: number;
  public name: string;
  public lastName: string;
  public gender: string;
  public stringBirthdate: string;
  public birthdate: Date;
  public email: string;
  public sales: Sale[];
  public timestamp: Date;

  public constructor() {
    this.sales = [];
  }

  public getAge() {
    let age: number;

    age = (Date.now() - this.birthdate.getTime());
    age = age / 1000 / 60 / 60 / 24 / 365;
    age = Math.floor(age);

    return age;
  }
}
