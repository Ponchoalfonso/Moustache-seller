export class Client {

  public static last_index: number;

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
  public stringBirthdate: string;
  public birthdate: Date;
  public get age() {
    let age: number;

    age = (Date.now() - this.birthdate.getTime());
    age = age / 1000 / 60 / 60 / 24 / 365;
    age = Math.floor(age);

    return age;
  }
  public email: string;
  public sales_id: number[];
  public timestamp: Date;

  public constructor() {
    this.sales_id = [];
  }

}
