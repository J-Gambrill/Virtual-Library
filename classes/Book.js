// import the Media class:
const Media = require("./Media");

// create your Book class:
class Book extends Media{
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating
        
    }

    summary(){
       return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${numPages}, Genre ${genre}, Rating ${rating}`
    }

    static highestRating(books) {
        if (books.length === 0) {
            return null; // Return null if the array is empty
        }
        let highestRatedBook = books[0]; // Assume the first book has the highest rating
        for (let i = 1; i < books.length; i++) {
            if (books[i].rating > highestRatedBook.rating) {
                highestRatedBook = books[i]; // Update if a higher rating is found
            }
        }
        return highestRatedBook;
    }
}
// don't change below
module.exports = Book;
