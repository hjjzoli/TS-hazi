interface ILibrary {
  addBook(book: Book): void;
  removeBook(id: string): void;
  findBookById(id: string): Book | undefined;
  listAllBooks(): Book[];
}

class Book {
  constructor(public id: string, public title: string, public author: string) {}
}

class Library implements ILibrary {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(id: string): void {
    this.books = this.books.filter((book) => book.id !== id);
  }

  findBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  listAllBooks(): Book[] {
    return this.books;
  }
}

class User {
  constructor(
    public userId: string,
    public name: string,
    public email: string
  ) {}

  borrowBook(library: Library, bookId: string): void {
    const book = library.findBookById(bookId);
    if (book) {
      console.log(`A(z) ${book.title} című könyvet sikeresen kikölcsönözted.`);
    } else {
      console.log("A könyv nem található.");
    }
  }
}

