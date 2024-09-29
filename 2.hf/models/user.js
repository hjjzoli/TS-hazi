"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const order_1 = require("./order");
class User {
    constructor(id, name, email) {
        this._id = id;
        this._name = name;
        this._email = email;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    placeOrder(products) {
        return new order_1.Order(this._id, products);
    }
}
exports.User = User;
