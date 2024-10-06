"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItems_1 = require("./models/todoItems");
const todoCollection_1 = require("./models/todoCollection");
let todos = new todoCollection_1.TodoCollection('Adam', [
    new todoItems_1.TodoItem(1, 'Buy Flowers', false, ''),
    new todoItems_1.TodoItem(2, 'Get Shoes', true, ''),
    new todoItems_1.TodoItem(3, 'Collect Tickets', false, ''),
    new todoItems_1.TodoItem(4, 'Call Joe', true, '')
]);
console.clear();
console.log(`${todos.userName}'s Todo List`);
let newId = todos.addTask('New Task');
todos.taskDone(newId);
console.log(`Task ${newId} is done`);
todos.getTodoItems(true).forEach(item => item.printDetails());
