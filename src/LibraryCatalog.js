import React, { useState } from 'react';
import './LibraryCatalog.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img
            src="/images/library logo.png"
            alt="Logo"
            className="logo"
          />
          <nav className="nav">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Catalog
            </NavLink>
            <NavLink to="/borrow-history" className="nav-link" activeClassName="active">
              Borrow History
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </nav>
        </div>
        <button className="add-book-btn">
          <i className="fas fa-plus"></i> Add New Book
        </button>
      </div>
    </header>
  );
}

function Stats() {
  const stats = [
    {
      icon: "fas fa-book",
      label: "Total Books",
      value: "2,847",
      color: "blue",
    },
    {
      icon: "fas fa-check",
      label: "Available",
      value: "2,346",
      color: "green",
    },
    {
      icon: "fas fa-clock",
      label: "Borrowed",
      value: "501",
      color: "yellow",
    },
    {
      icon: "fas fa-users",
      label: "Active Readers",
      value: "1,257",
      color: "purple",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className={`stat-icon ${stat.color}`}>
            <i className={`${stat.icon} fa-2x`}></i>
          </div>
          <div className="stat-info">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

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
    title: "War and Peace",
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
    image: "/images/The Picture of Dorian Gray.jpg",
  },
];

function BookCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const booksPerPage = 10;

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterBooks(query, selectedGenre);
  };

  const handleFilter = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    filterBooks(searchQuery, genre);
  };

  const filterBooks = (query, genre) => {
    const filtered = books.filter((book) =>
      (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)) &&
      (genre === '' || book.genre === genre)
    );
    setFilteredBooks(filtered);
    setCurrentPage(1); // Reset to first page on search or filter
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="book-catalog">
      <div className="catalog-header">
        <h2 className="catalog-title">Book Catalog</h2>
        <div className="catalog-actions">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
          <select className="filter-select" onChange={handleFilter} value={selectedGenre}>
            <option value="">All Genres</option>
            <option value="Fiction">Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Adventure">Adventure</option>
            <option value="Historical">Historical</option>
            <option value="Epic">Epic</option>
            <option value="Psychological">Psychological</option>
            <option value="Philosophical">Philosophical</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
      </div>
      {currentBooks.length > 0 ? (
        <table className="catalog-table">
          <thead>
            <tr className="table-header">
              <th className="table-cell">TITLE & AUTHOR</th>
              <th className="table-cell">GENRE</th>
              <th className="table-cell">STATUS</th>
              <th className="table-cell">BORROW COUNT</th>
              <th className="table-cell"></th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book, index) => (
              <tr className="table-row" key={index}>
                <td className="table-cell">
                  <div className="book-info">
                    <img
                      src={book.image}
                      alt="Book cover"
                      className="book-cover"
                    />
                    <div>
                      <p className="book-title">{book.title}</p>
                      <p className="book-author">{book.author}</p>
                    </div>
                  </div>
                </td>
                <td className="table-cell">
                  <span className={`genre-badge ${book.genreColor}`}>
                    {book.genre}
                  </span>
                </td>
                <td className="table-cell">
                  <span className={`status-badge ${book.statusColor}`}>
                    {book.status}
                  </span>
                </td>
                <td className="table-cell">{book.borrowCount}</td>
                <td className="table-cell">
                  <NavLink className="details-link" to={`/book/${book.id}`}>
                    <button className="details-button">Details</button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-results">No results found</p>
      )}
      <div className="pagination">
        <p className="pagination-info">
          Showing {indexOfFirstBook + 1} to {Math.min(indexOfLastBook, filteredBooks.length)} of {filteredBooks.length} results
        </p>
        <div className="pagination-controls">
          {Array.from({ length: Math.ceil(filteredBooks.length / booksPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Header, Stats, BookCatalog };