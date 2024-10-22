// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating){
       
        super( title, year, genre )
        this.director = director 
        this.duration = duration
        this.rating = rating
        
        
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