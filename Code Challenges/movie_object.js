/*
function Movie(title, director, genre, releaseyear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseyear = releaseyear;
    this.rating = rating;
}

Movie.prototype.getOverview = function() {
    return `${this.title} film directed by ${this.director} was release in ${this.releaseyear}. 
            It received a rating of ${this.rating}`;
}
*/

class Movie {
    constructor(title, director, genre, releaseyear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseyear = releaseyear;
        this.rating = rating;
    }
    getOverview() {
        return `${this.title} film directed by ${this.director} was release in ${this.releaseyear}. 
            It received a rating of ${this.rating}`;
    }
}

const movieObj1 = new Movie('Hera Pheri', 'Priyadarshan', 'comedy', 2002, 5);
const movieObj2 = new Movie('The Kashmir Files', 'Vivek Agnihgotri', 'Drama', 2022, 4.5);
console.log(movieObj1.getOverview());
console.log(movieObj2.getOverview());