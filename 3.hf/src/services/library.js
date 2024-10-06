"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const typeGuards_1 = require("../utils/typeGuards");
const loadManager_1 = require("./loadManager");
class Library {
    constructor() {
        this.books = new Map();
        this.borrowers = new Map();
        this.loads = new Map();
    }
    addBook(book) {
        if ((0, typeGuards_1.isBook)(book)) {
            this.books.set(book.id, book);
        }
    }
    addBorrower(borrower) {
        if ((0, typeGuards_1.isBorrower)(borrower)) {
            this.borrowers.set(borrower.id, borrower);
        }
    }
    removeBook(id) {
        this.books.delete(id);
    }
    removeBorrower(id) {
        this.borrowers.delete(id);
    }
    removeLoan(id) {
        this.loads.delete(id);
    }
    listBooks() {
        return Array.from(this.books.values());
    }
    borrowBook(bookId, borrowerId) {
        const book = this.books.get(bookId);
        const borrower = this.borrowers.get(borrowerId);
        if (book && borrower) {
            let load = this.loads.get(borrowerId);
            if (!load) {
                load = new loadManager_1.LoadManager();
                this.loads.set(borrowerId, load);
            }
            load.addItem(book);
        }
    }
    returnBook(loanId) {
        this.removeLoan(loanId);
    }
    listBorrowedBooks() {
        return Array.from(this.loads.values()).map(loan => loan.book);
    }
    findBookByTitle(title) {
        return Array.from(this.books.values()).find(book => book.title === title);
    }
    getBorrowerDetails(bookId) {
        const loan = Array.from(this.loads.values()).find(load => load.book.id === bookId);
        return loan ? loan.borrower : undefined;
    }
    listBooksByCategory(category) {
        return Array.from(this.books.values()).filter(book => book.category === category);
    }
}
exports.Library = Library;
