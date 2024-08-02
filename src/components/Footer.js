// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Company Name</h5>
            <p>123 Street Name, City, Country</p>
            <p>Email: info@company.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#terms" className="text-white">Terms of Service</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook" className="text-white">Facebook</a></li>
              <li><a href="#twitter" className="text-white">Twitter</a></li>
              <li><a href="#instagram" className="text-white">Instagram</a></li>
              <li><a href="#linkedin" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
