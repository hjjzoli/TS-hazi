import {Book} from './models/book';
import {Borrower} from './models/borrower';
import {Fiction, NonFiction} from './models/category';
import {Library} from './services/library';

const library = new Library();

const fiction = new Fiction('Fiction', 'Fantasy');

const book1 : Book = {
    id: 1,
    category: fiction,
    title: 'Sárkányok háza',
    author:'Geroge R.R. Martin',
    price: 9990
};

const book2 : Book = {
    id: 2,
    category: fiction,
    title: 'It',
    author: 'Stephen King',
    price: 7890
};

const borrower1 : Borrower = {
    id: 1,
    name: 'Kiss József',
    email: 'kissjozsef@gmail.com',
    phone: '06301234567',
    address: 'Budapest',
    city: 'Budapest',
    state: 'Pest',
    zip: '1111'
};

const borrower2 : Borrower = {
    id: 2,
    name: 'Nagy Béla',
    email: 'nagybela@gmail.com',
    phone: '06304567890',
    address: 'Debrecen',
    city: 'Debrecen',
    state: 'Hajdú-Bihar',
    zip: '2222'
};

library.addBook(book1);
library.addBook(book2);

library.addBorrower(borrower1);
library.addBorrower(borrower2);

library.borrowBook(book1.id, borrower1.id);
library.borrowBook(book2.id, borrower2.id);

console.log(library.listBorrowedBooks());
library.listBorrowedBooks().forEach(book => {
    console.log(book.title);
}
);

library.returnBook(1);
console.log(library.listBorrowedBooks());

library.returnBook(2);
console.log(library.listBorrowedBooks());

console.log(library.findBookByTitle('It'));


console.log("Kölcsönző adatai (ID: 1):");
const borrowerDetails = library.getBorrowerDetails(1);
if (borrowerDetails) {
    console.log(borrowerDetails);
}

