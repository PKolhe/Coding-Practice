/* 
function BookStore(title, author, isbn, noOfCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.noOfCopies = noOfCopies;
}

BooksStore.prototype.getAvilability = function() {
    if (this.noOfCopies <= 0) {
        return `Out of Stock !`;
    } else if ( this.noOfCopies <= 10) {
        return `Low Stock!`;
    } 
    return `Enough Stock avilable`;
}

BooksStore.prototype.sell = function(noOfCopies = 1) {
    this.noOfCopies -= noOfCopies;
}

BooksStore.prototype.reStock = function(noOfCopies = 5) {
    this.noOfCopies += noOfCopies;
}*/

class BookStore {
    constructor(title, author, isbn, noOfCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.noOfCopies = noOfCopies;
    }

    get avilability() {
        return this.getAvilability();
    }

    getAvilability() {
        if (this.noOfCopies <= 0) {
            return `Out of Stock !`;
        } else if ( this.noOfCopies <= 10) {
            return `Low Stock!`;
        } 
        return `Enough Stock avilable`;
    }

    sell(noOfCopies = 1) {
        this.noOfCopies -= noOfCopies;
    }

    reStock(noOfCopies = 5) {
        this.noOfCopies += noOfCopies;
    }
}

let book = new BookStore('Big Thinking', 'Pankaj K', 6578383, 5);

console.log(book.avilability);
book.sell(5);
console.log(book.avilability);
book.reStock(15);
console.log(book.avilability);
