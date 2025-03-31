import React from 'react';
import './BorrowHistory.css';

function BorrowHistory() {
  const borrowHistory = [
    {
      bookTitle: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowDate: "2023-01-15",
      returnDate: "2023-02-15",
      status: "Returned",
    },
    {
      bookTitle: "1984",
      author: "George Orwell",
      borrowDate: "2023-02-01",
      returnDate: "2023-03-01",
      status: "Overdue",
    },
    {
      bookTitle: "To Kill a Mockingbird",
      author: "Harper Lee",
      borrowDate: "2023-01-10",
      returnDate: "2023-02-10",
      status: "Returned",
    },
    {
      bookTitle: "Pride and Prejudice",
      author: "Jane Austen",
      borrowDate: "2023-01-20",
      returnDate: "2023-02-20",
      status: "Returned",
    },
    {
      bookTitle: "The Catcher in the Rye",
      author: "J.D. Salinger",
      borrowDate: "2023-01-25",
      returnDate: "2023-02-25",
      status: "Returned",
    },
    {
      bookTitle: "The Hobbit",
      author: "J.R.R. Tolkien",
      borrowDate: "2023-01-30",
      returnDate: "2023-02-28",
      status: "Returned",
    },
    {
      bookTitle: "Moby Dick",
      author: "Herman Melville",
      borrowDate: "2023-02-05",
      returnDate: "2023-03-05",
      status: "Returned",
    },
  ];

  return (
    <div className="borrow-history">
      <h2 className="page-title">Borrow History</h2>
      <table className="history-table">
        <thead>
          <tr className="table-header">
            <th className="table-cell">Book Title</th>
            <th className="table-cell">Author</th>
            <th className="table-cell">Borrow Date</th>
            <th className="table-cell">Return Date</th>
            <th className="table-cell">Status</th>
          </tr>
        </thead>
        <tbody>
          {borrowHistory.map((record, index) => (
            <tr className="table-row" key={index}>
              <td className="table-cell">{record.bookTitle}</td>
              <td className="table-cell">{record.author}</td>
              <td className="table-cell">{record.borrowDate}</td>
              <td className="table-cell">{record.returnDate}</td>
              <td className={`table-cell status ${record.status.toLowerCase()}`}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BorrowHistory;