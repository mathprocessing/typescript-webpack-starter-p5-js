import { Point } from "point";

/**
 * Type Book Type = {0, 1, 2}
 */
type BookType = 0 | 1 | 2;

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {BookType} bookType - Number that corresponds to type of book.
 * @param {Date} date - Date of writing a book.
 */
function Book(title: string, author: string, bookType: BookType, date: Date) {
  return { title, author, bookType, date };
}

addEventListener('load', function () {
  const book1 = Book("book title", "book author", 1, new Date(2020, 12, 1));

  let point = new Point(10, 20);
  console.log(point.length);
  point.print();
  
  console.warn(book1);
})
