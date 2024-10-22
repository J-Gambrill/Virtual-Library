// create your Media class:
class Media{
    
    static totalMediaCount = 0//how many products have been created
    constructor(title, year, genre){
        this.title = title
        this.year = year
        this.genre = genre
    }

    summary(){
        return `Title: ${title}, Year: ${year}, Genre: ${genre}`
    }
}
// uncomment below to export it:
module.exports = Media;
