//1-  Create a book object with properties title (a string), author (a string), and pages (a number).

const book = {
    title: "One hundred of the greats of the Nation of Islam who changed the course of history",
    author: "Jehad El-Terbani",
    pages: 400,

//2-  Add a method getSummary that uses the this keyword to return the sentence: "The book '[title]' by [author] has [pages] pages."
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.pages} pages`;
    }
};

//3-  Call the getSummary method.
book.getSummary();