export class Payment {

    public amount: number;
    public givenAmount: number;
    public taxPercent: number;
    public isPaid: boolean;
    public get taxes(): number {
        return this.amount * this.taxPercent / 100;
    }
    public get total(): number {
        return this.amount + this.taxes;
    }
    public get change(): number {
        return this.givenAmount - this.total;
    }

    public constructor() {
        this.taxPercent = 16;
        this.isPaid = false;
    }

    public validate(givenAmount: number): boolean {
        this.givenAmount = givenAmount;
        if (this.change >= 0) {
            this.isPaid = true;
        }

        return this.isPaid;
    }
}