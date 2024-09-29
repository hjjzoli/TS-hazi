"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const rxjs_1 = require("rxjs");
const inventory_1 = require("../models/inventory");
class InventoryService {
    constructor() {
        this.inventory = new inventory_1.Inventory([]);
        this.inventorySubject = new rxjs_1.BehaviorSubject(this.inventory);
    }
    addProduct(product) {
        this.inventory.addProduct(product);
        this.inventorySubject.next(this.inventory);
    }
    removeProduct(id) {
        this.inventory.removeProduct(id);
        this.inventorySubject.next(this.inventory);
    }
    findProduct(id) {
        return this.inventory.findProduct(id);
    }
    findProductByName(name) {
        return this.inventory.findProductByName(name);
    }
    listAllProducts() {
        return this.inventory.listAllProducts();
    }
    getInventory() {
        return this.inventorySubject;
    }
}
exports.InventoryService = InventoryService;
