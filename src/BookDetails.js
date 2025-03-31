import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    status: "Available",
    borrowCount: 247,
    genreColor: "blue",
    statusColor: "green",
    isbn: "978-0743273565",
    publisher: "Scribner",
    borrowingHistory: [
      { date: "2023-01-15", status: "Returned" },
      { date: "2023-02-01", status: "Borrowed" },
    ],
    image: "/images/the great gatsby.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    status: "Borrowed",
    borrowCount: 189,
    genreColor: "purple",
    statusColor: "yellow",
    isbn: "978-0451524935",
    publisher: "Signet Classic",
    borrowingHistory: [
      { date: "2023-02-01", status: "Borrowed" },
      { date: "2023-03-01", status: "Overdue" },
    ],
     image: "/images/1984.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    status: "Available",
    borrowCount: 300,
    genreColor: "blue",
    statusColor: "green",
    isbn: "978-0061120084",
    publisher: "J.B. Lippincott & Co.",
    borrowingHistory: [
      { date: "2023-01-10", status: "Returned" },
      { date: "2023-02-05", status: "Borrowed" },
    ],
    image: "/images/To Kill a Mockingbird.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    status: "Available",
    borrowCount: 150,
    genreColor: "pink",
    statusColor: "green",
    isbn: "978-1503290563",
    publisher: "CreateSpace Independent Publishing Platform",
    borrowingHistory: [
      { date: "2023-01-20", status: "Returned" },
      { date: "2023-02-15", status: "Borrowed" },
    ],
    image: "/images/Pride and Prejudice.jpg",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    status: "Borrowed",
    borrowCount: 220,
    genreColor: "blue",
    statusColor: "yellow",
    isbn: "978-0316769488",
    publisher: "Little, Brown and Company",
    borrowingHistory: [
      { date: "2023-01-25", status: "Returned" },
      { date: "2023-02-20", status: "Borrowed" },
    ],
    image: "/images/The Catcher in the Rye.jpg",
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    status: "Available",
    borrowCount: 180,
    genreColor: "purple",
    statusColor: "green",
    isbn: "978-0547928227",
    publisher: "Houghton Mifflin Harcourt",
    borrowingHistory: [
      { date: "2023-01-30", status: "Returned" },
      { date: "2023-02-25", status: "Borrowed" },
    ],
    image: "/images/The Hobbit.jpg",
  },
  {
    id: 7,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    status: "Available",
    borrowCount: 90,
    genreColor: "orange",
    statusColor: "green",
    isbn: "978-1503280786",
    publisher: "CreateSpace Independent Publishing Platform",
    borrowingHistory: [
      { date: "2023-02-05", status: "Returned" },
      { date: "2023-03-01", status: "Borrowed" },
    ],
    image: "/images/Moby Dick.jpg",
  },
  {
    id: 8,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical",
    status: "Borrowed",
    borrowCount: 110,
    genreColor: "brown",
    statusColor: "yellow",
    isbn: "978-1420959714",
    publisher: "Digireads.com Publishing",
    borrowingHistory: [
      { date: "2023-02-10", status: "Returned" },
      { date: "2023-03-05", status: "Borrowed" },
    ],
    image: "/images/War and Peace.jpg",
  },
  {
    id: 9,
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    status: "Available",
    borrowCount: 130,
    genreColor: "red",
    statusColor: "green",
    isbn: "978-0140268867",
    publisher: "Penguin Classics",
    borrowingHistory: [
      { date: "2023-02-15", status: "Returned" },
      { date: "2023-03-10", status: "Borrowed" },
    ],
    image: "/images/The Odyssey.jpg",
  },
  {
    id: 10,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    status: "Available",
    borrowCount: 140,
    genreColor: "gray",
    statusColor: "green",
    isbn: "978-0486415871",
    publisher: "Dover Publications",
    borrowingHistory: [
      { date: "2023-02-20", status: "Returned" },
      { date: "2023-03-15", status: "Borrowed" },
    ],
    image: "/images/Crime and Punishment.jpg",
  },
  {
    id: 11,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    status: "Borrowed",
    borrowCount: 160,
    genreColor: "gray",
    statusColor: "yellow",
    isbn: "978-0374528379",
    publisher: "Farrar, Straus and Giroux",
    borrowingHistory: [
      { date: "2023-02-25", status: "Returned" },
      { date: "2023-03-20", status: "Borrowed" },
    ],
    image: "/images/The Brothers Karamazov.jpg",
  },
  {
    id: 12,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    status: "Available",
    borrowCount: 200,
    genreColor: "purple",
    statusColor: "green",
    isbn: "978-0060850524",
    publisher: "Harper Perennial Modern Classics",
    borrowingHistory: [
      { date: "2023-03-01", status: "Returned" },
      { date: "2023-03-25", status: "Borrowed" },
    ],
    image:"/images/Brave New World.jpg" ,
  },
  {
    id: 13,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    status: "Available",
    borrowCount: 250,
    genreColor: "purple",
    statusColor: "green",
    isbn: "978-0544003415",
    publisher: "Houghton Mifflin Harcourt",
    borrowingHistory: [
      { date: "2023-03-05", status: "Returned" },
      { date: "2023-03-30", status: "Borrowed" },
    ],
    image: "/images/The Lord of the Rings.jpg",
  },
  {
    id: 14,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    status: "Borrowed",
    borrowCount: 170,
    genreColor: "pink",
    statusColor: "yellow",
    isbn: "978-1503278196",
    publisher: "CreateSpace Independent Publishing Platform",
    borrowingHistory: [
      { date: "2023-03-10", status: "Returned" },
      { date: "2023-04-05", status: "Borrowed" },
    ],
    image:"/images/Jane Eyre.jpg" ,
  },
  {
    id: 15,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Romance",
    status: "Available",
    borrowCount: 190,
    genreColor: "pink",
    statusColor: "green",
    isbn: "978-1505313109",
    publisher: "CreateSpace Independent Publishing Platform",
    borrowingHistory: [
      { date: "2023-03-15", status: "Returned" },
      { date: "2023-04-10", status: "Borrowed" },
    ],
    image: "/images/Wuthering Heights.jpg",
  },
  {
    id: 16,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Epic",
    status: "Available",
    borrowCount: 210,
    genreColor: "red",
    statusColor: "green",
    isbn: "978-0142437223",
    publisher: "Penguin Classics",
    borrowingHistory: [
      { date: "2023-03-20", status: "Returned" },
      { date: "2023-04-15", status: "Borrowed" },
    ],
    image: "/images/The Divine Comedy.jpg",
  },
  {
    id: 17,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    status: "Borrowed",
    borrowCount: 230,
    genreColor: "black",
    statusColor: "yellow",
    isbn: "978-0486282114",
    publisher: "Dover Publications",
    borrowingHistory: [
      { date: "2023-03-25", status: "Returned" },
      { date: "2023-04-20", status: "Borrowed" },
    ],
    image: "/images/Frankenstein.jpg",
  },
  {
    id: 18,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    status: "Available",
    borrowCount: 240,
    genreColor: "black",
    statusColor: "green",
    isbn: "978-0486411095",
    publisher: "Dover Publications",
    borrowingHistory: [
      { date: "2023-03-30", status: "Returned" },
      { date: "2023-04-25", status: "Borrowed" },
    ],
    image: "/images/Dracula.jpg",
  },
  {
    id: 19,
    title: "The Iliad",
    author: "Homer",
    genre: "Epic",
    status: "Available",
    borrowCount: 260,
    genreColor: "red",
    statusColor: "green",
    isbn: "978-0140275360",
    publisher: "Penguin Classics",
    borrowingHistory: [
      { date: "2023-04-01", status: "Returned" },
      { date: "2023-04-25", status: "Borrowed" },
    ],
    image: "/images/The Iliad.jpg",
  },
  {
    id: 20,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Philosophical",
    status: "Borrowed",
    borrowCount: 270,
    genreColor: "gray",
    statusColor: "yellow",
    isbn: "978-0141439570",
    publisher: "Penguin Classics",
    borrowingHistory: [
      { date: "2023-04-05", status: "Returned" },
      { date: "2023-04-30", status: "Borrowed" },
    ],
    image: "/images/The Picture of Dorian Gray.jpg",
  },
];

function BookDetails() {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <h2 className="book-title">{book.title}</h2>
      <img src={book.image} alt={`${book.title} cover`} className="book-image" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Status:</strong> {book.status}</p>
      <p><strong>Borrow Count:</strong> {book.borrowCount}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <h3>Borrowing History</h3>
      <ul>
        {book.borrowingHistory.map((entry, index) => (
          <li key={index}>{entry.date} - {entry.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;