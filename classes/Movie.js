// import the Media class:
const { Media } = require("./classes/media.js")

// create your Movie class:
class Movie extends Media {
    constructor(director, rating, duration, genre, title, year){
        this.director = director 
        this.rating = rating
        super(duration)
        super(genre)
        super(title)
        super(++totalMediaCount)
    }

    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}, Director: ${this.director}`
    }

    static longestMovie(movies) {
        if (movies.length === 0) {
            return null; // Return null if the array is empty
        }
        let longestmov = movies[0]; // Assume the first movie has the longest playtime
        for (let i = 1; i < movies.duration; i++) {
            if (movies[i].duration > longestmov.duration) {
                longestmov = movies[i]; // Update if a higher rating is found
            }
        }
        return longestmov;
    }

}
// don't change below
module.exports = Movie;