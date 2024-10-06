import { Book } from '../models/book';
import { Category } from '../models/category';
import { isBook, isBorrower } from '../utils/typeGuards';
import { Borrower } from '../models/borrower';
import {LoadManager} from './loadManager';

export class Library {
    private books: Map<number, Book> = new Map();
    private borrowers: Map<number, Borrower> = new Map();
    private loads: Map<number, LoadManager<Book>> = new Map();

    addBook(book: Book): void {
        if (isBook(book)) {
            this.books.set(book.id, book);
        }
    }

    addBorrower(borrower: Borrower): void {
        if (isBorrower(borrower)) {
            this.borrowers.set(borrower.id, borrower);
        }
    }

    removeBook(id: number): void {
        this.books.delete(id);
    }

    removeBorrower(id: number): void {
        this.borrowers.delete(id);
    }

    removeLoan(id: number): void {
        this.loads.delete(id);
    }

    listBooks(): Book[] {
        return Array.from(this.books.values());
    }

   borrowBook(bookId: number, borrowerId: number): void {
        const book = this.books.get(bookId);
        const borrower = this.borrowers.get(borrowerId);
        if (book && borrower) {
            let load = this.loads.get(borrowerId);
            if (!load) {
                load = new LoadManager<Book>();
                this.loads.set(borrowerId, load);
            }
            load.addItem(book);
        }
    }

    returnBook(loanId: number): void {
        this.removeLoan(loanId);
    }


    listBorrowedBooks(): Book[] {
        return Array.from(this.loads.values()).map(loan => loan.book);
    }

    findBookByTitle(title: string): Book | undefined {
        return Array.from(this.books.values()).find(book => book.title === title);
    }

    getBorrowerDetails(bookId: number): Book | undefined {
        const loan = Array.from(this.loads.values()).find(load => load.book.id === bookId);
        return loan ? loan.borrower : undefined;
    }

    listBooksByCategory(category: Category): Book[] {
        return Array.from(this.books.values()).filter(book => book.category === category);
    }

}

