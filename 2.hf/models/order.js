"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = exports.Order = void 0;
class Order {
    constructor(id, products) {
        this._id = id;
        this._products = products;
        this._status = OrderStatus.New;
    }
    get id() {
        return this._id;
    }
    get products() {
        return this._products;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    sumOrder() {
        return this._products.reduce((sum, product) => sum + product.price, 0);
    }
}
exports.Order = Order;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["New"] = 0] = "New";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
