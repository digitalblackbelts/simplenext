import React from 'react';
import './Footer.css'; // Import the CSS stylesheet

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
  );
};

export default Footer;
