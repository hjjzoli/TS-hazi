import { Product } from './product';

export class Order {
    private _id: string;
    private _products: Product[];
    private _status: OrderStatus;

    constructor(id: string, products: Product[]) {
        this._id = id;
        this._products = products;
        this._status = OrderStatus.New;
    }

    public get id(): string {
        return this._id;
    }

    public get products(): Product[] {
        return this._products;
    }

    public get status(): OrderStatus {
        return this._status;
    }

    public set status(status: OrderStatus) {
        this._status = status;
    }

    public sumOrder(): number {
        return this._products.reduce((sum, product) => sum + product.price, 0);
    }
}

export enum OrderStatus {
    New,
    Processing,
    Shipped,
    Delivered
}

export interface IOrder {
    id: string;
    products: Product[];
    status: OrderStatus;
    sumOrder(): number;
}



