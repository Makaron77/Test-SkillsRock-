//! 1. Реализация простого калькулятора
class Calculator {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add() {
		return this.a + this.b;
	}

	subtract() {
		return this.a - this.b;
	}

	multiply() {
		return this.a * this.b;
	}

	divide() {
		if (this.b === 0) {
			return 'Ошибка: деление на ноль невозможно';
		}
		return this.a / this.b;
	}
}

const calc = new Calculator(6, 2);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());

//! 2. Система управления библиотекой

class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.status = true;
	}
}

class Library {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	borrowBook(isbn) {
		//* Позволяет брать книгу по её ISBN.
		this.books.find(book => {
			if (book.isbn === isbn && book.status === true) {
				book.status = false;
			}
		});
	}
	returnBook(isbn) {
	this.books.find(book => {
		if (book.isbn === isbn && book.status === false) {
			book.status = true;
		}
	});
	}
listAvailableBooks() {
return this.books.filter(book => book.status === true);
}


}

const library = new Library();
const book1 = new Book('Книга', 'Пушкин', '12345');
const book2 = new Book('Книга1', 'Пушкин1', '12368');

library.addBook(book1);
library.addBook(book2);
library.borrowBook('12345');
  library.returnBook('12345');
console.log(library.listAvailableBooks());

