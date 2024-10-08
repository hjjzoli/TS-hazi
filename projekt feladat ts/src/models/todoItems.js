"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false, content) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.content = content;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`);
    }
}
exports.TodoItem = TodoItem;
