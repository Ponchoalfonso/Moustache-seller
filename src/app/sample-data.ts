import { Product } from './classes/product';
import { Category } from './classes/category';
import { Sale } from './classes/sale';
import { Payment } from './classes/payment';
import { Client } from './classes/client';

export const PRODUCTS: Product[] = [];
const names: string[] = [
    'Donitas Bimbo',
    'Pan Bimbo blanco GDE',
    'Tortillinas Tia Rosa',
    'Lata chiles chipotle CH',
];
const prices: number[] = [11.00, 31.50, 9, 10];

for (let i = 0; i < 4; i++) {
    PRODUCTS.push(new Product());
    PRODUCTS[i].id = i + 1;
    PRODUCTS[i].name = names[i];
    PRODUCTS[i].price = prices[i];
    PRODUCTS[i].measureType = '0';
}
