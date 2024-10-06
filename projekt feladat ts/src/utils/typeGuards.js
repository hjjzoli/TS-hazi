"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTodoItem = isTodoItem;
exports.isTodoItemArray = isTodoItemArray;
exports.isTodoItemArrayOrUndefined = isTodoItemArrayOrUndefined;
exports.isTodoItemOrUndefined = isTodoItemOrUndefined;
const todoItems_1 = require("../models/todoItems");
function isTodoItem(item) {
    return item instanceof todoItems_1.TodoItem;
}
function isTodoItemArray(items) {
    return items.every(item => isTodoItem(item));
}
function isTodoItemArrayOrUndefined(items) {
    return items === undefined || isTodoItemArray(items);
}
function isTodoItemOrUndefined(item) {
    return item === undefined || isTodoItem(item);
}
