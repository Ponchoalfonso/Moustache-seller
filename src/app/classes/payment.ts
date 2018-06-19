export class Payment {

  public static last_index: number;

  public id: number;
  public amount: number;
  public givenAmount: number;
  private taxPercent: number;
  public validated: boolean;
  public validationDate: Date;
  public timestamp: Date;

  public constructor() {
    this.taxPercent = 16;
    this.validated = false;
    this.amount = 0;
    this.givenAmount = 0;
  }

  public getTaxes(): number {
      return this.amount * this.taxPercent / 100;
  }

  public getTotal(): number {
      return this.amount + this.getTaxes();
  }

  public getChange(): number {
      return this.givenAmount - this.getTotal();
  }

  public validate(): boolean {

      if (this.getChange() >= 0 && this.getTotal() > 0) {
          this.validated = true;
          this.validationDate = new Date();
      }

      return this.validated;
  }

}
