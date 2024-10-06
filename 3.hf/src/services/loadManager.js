"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadManager = void 0;
class LoadManager {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getItems() {
        return this.items;
    }
}
exports.LoadManager = LoadManager;
