export class Product {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(id: string, name: string, price: number, description: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public get description(): string {
        return this._description;
    }
}


