class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
const book1 = new Book('Book one', 'John Doe', '2020');
console.log(book1);

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//can add function using prototype 
Magazine.prototype.getSum = function () {
    return `${this.title} was written by ${this.author}`
}
const Mag1 = new Magazine('Mag one', 'Jane Doe', '2021', 'Jan');

console.log('by new fun using prototype:',Mag1.getSum());
console.log('by extending:', Mag1.getSummary());