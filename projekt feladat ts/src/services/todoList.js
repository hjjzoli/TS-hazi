"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
exports.logAddition = logAddition;
class TodoList {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        this.items.set(item.id, item);
        console.log(`Elem hozzáadva: ${item.id}`);
    }
    deleteItem(id) {
        this.items.delete(id);
        console.log(`Elem törölve: ${id}`);
    }
    listItems() {
        this.items.forEach((item) => {
            item.printDetails();
        });
    }
}
exports.TodoList = TodoList;
function logAddition(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        const returnValue = original.apply(this, args);
        console.log(`Az eredmény: ${returnValue}`);
        return returnValue;
    };
}
