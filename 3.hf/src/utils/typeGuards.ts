import {Book} from '../models/book';
import {Borrower} from '../models/borrower';

export function isBook(arg: any): arg is Book {
    return arg && arg.id && arg.category && arg.title && arg.author && arg.price;
}

export function isBorrower(arg: any): arg is Borrower {
    return arg && arg.id && arg.name && arg.email && arg.phone && arg.address && arg.city && arg.state && arg.zip;
}
