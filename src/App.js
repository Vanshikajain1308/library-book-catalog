import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Stats, BookCatalog } from './LibraryCatalog';
import BorrowHistory from './BorrowHistory';
import About from './About';
import BookDetails from './BookDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<><Stats /><BookCatalog /></>} />
            <Route path="/borrow-history" element={<BorrowHistory />} />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
