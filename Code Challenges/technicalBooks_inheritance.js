class TechnicleBook extends BookStore {
    constructor(title, author, isbn, noOfCopies, edition) {
        super(title, author, isbn, noOfCopies);
        this.edition = edition;
    }

    getEdition() {
        return `Latest version of this book is ${this.edition}`;
    }
}

let book1 = new TechnicleBook('.NET', 'ShivPRasad Koirala', 6578383, 5, 5.7);
console.log(book1.avilability);
book1.sell(5);
console.log(book1.avilability);
book1.reStock(15);
console.log(book1.avilability);
console.log(book1.getEdition());