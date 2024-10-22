// create your Media class:
class Media{
    
    static totalMediaCount = 0//how many products have been created
    constructor(title, year, genre){
        this.title = title
        this.year = year
        this.genre = 
        totalMediaCount ++
    }

    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}

module.exports = Media;
