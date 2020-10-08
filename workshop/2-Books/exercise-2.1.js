// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

let book1 = new Book("Title1", "Genre1", "Author1", true);
let book2 = new Book("Title2", "Genre2", "Author2", true);
let book3 = new Book("Title3", "Genre3", "Author3", false);
let book4 = new Book("Title4", "Genre4", "Author4", true);
let book5 = new Book("Title5", "Genre5", "Author5", false);
