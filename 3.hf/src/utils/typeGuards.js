"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBook = isBook;
exports.isBorrower = isBorrower;
function isBook(arg) {
    return arg && arg.id && arg.category && arg.title && arg.author && arg.price;
}
function isBorrower(arg) {
    return arg && arg.id && arg.name && arg.email && arg.phone && arg.address && arg.city && arg.state && arg.zip;
}
