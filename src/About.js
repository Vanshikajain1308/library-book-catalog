import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h2 className="page-title">About Us</h2>
      <p className="about-text">
        Welcome to our library! We are dedicated to providing a wide range of books and resources to our community. Our mission is to promote literacy, education, and a love for reading. Whether you're looking for the latest bestseller, a classic novel, or research materials, we have something for everyone.
      </p>
      <p className="about-text">
        Our library offers a variety of services including book lending, reading programs, and community events. We strive to create a welcoming and inclusive environment for all our patrons. Thank you for being a part of our library community!
      </p>
      <footer className="footer">
        <h3 className="footer-title">Contact Us</h3>
        <div className="footer-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="tel:+1234567890">
            <i className="fas fa-phone"></i>
          </a>
        </div>
        <p className="footer-text">Phone: +1 (234) 567-890</p>
        <p className="footer-text">Email: info@library.com</p>
      </footer>
    </div>
  );
}

export default About;