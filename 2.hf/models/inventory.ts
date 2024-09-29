import { Product } from './product';

export class Inventory {
    private _products: Product[];

    constructor(products: Product[]) {
        this._products = products;
    }

    public addProduct(product: Product): void {
        this._products.push(product);
    }

    public removeProduct(id: string): void {
        this._products = this._products.filter(product => product.id !== id);
    }

    public findProduct(id: string): Product | undefined {
        return this._products.find(product => product.id === id);
    }

    public findProductByName(name: string): Product | undefined {
        return this._products.find(product => product.name === name);
    }

    public listAllProducts(): Product[] {
        return this._products;
    }
} 

