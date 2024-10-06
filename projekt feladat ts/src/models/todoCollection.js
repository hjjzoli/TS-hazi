"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItems_1 = require("./todoItems");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTask(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItems_1.TodoItem(this.nextId, task, false, ""));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    taskDone(id) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = true;
        }
    }
    deleteTask(id) {
        this.itemMap.delete(id);
    }
}
exports.TodoCollection = TodoCollection;
