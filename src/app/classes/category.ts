import { Product } from './product';

export class Category {

    public id: number;
    public name: string;
    public products_id: number[];
    public timestamp: Date;

    public constructor(name: string) {
        this.products_id = new Array();
    }

}
