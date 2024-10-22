// import the Media class:
const Media = require("./Media");
// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length){
       
        super(title, year, genre)

        this.artist = artist
        this.length = length
        
        
       
    }

    static shortestAlbum(songs) { //returns shortest song length
        if (songs.length === 0) {
            return null; // Return null if the array is empty
        }
        let shortestalbumlength = songs[0]; // Assume the first song has the least time
        for (let i = 1; i < songs.length; i++) {
            if (songs[i].length < shortestalbumlength.length) {
                shortestalbumlength= songs[i]; // Update if a lower length is found
            }
        }
        return shortestalbumlength;
    }
}
// don't change below
module.exports = Music;
