import { Order } from './order';
import { Product } from './product';

export class User {
    private _id: string;
    private _name: string;
    private _email: string;

    constructor(id: string, name: string, email: string) {
        this._id = id;
        this._name = name;
        this._email = email;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

    public placeOrder(products: Product[]): Order {
        return new Order(this._id, products);
    }
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    placeOrder(products: Product[]): Order;
}