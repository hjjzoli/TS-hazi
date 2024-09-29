"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor(products) {
        this._products = products;
    }
    addProduct(product) {
        this._products.push(product);
    }
    removeProduct(id) {
        this._products = this._products.filter(product => product.id !== id);
    }
    findProduct(id) {
        return this._products.find(product => product.id === id);
    }
    findProductByName(name) {
        return this._products.find(product => product.name === name);
    }
    listAllProducts() {
        return this._products;
    }
}
exports.Inventory = Inventory;
