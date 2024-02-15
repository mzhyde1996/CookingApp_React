import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-buttons">
        <Link to = "/favourite" className="left-button">
            <img src={require('../../assets/icons/star.png')} alt="User Icon" className="user-icon" />
        </Link>
        <Link to= "/chat" className="footer-title">Let's start!</Link>
        <Link to="/settings" className="right-button">
            <img src={require('../../assets/icons/settings.png')} alt="User Icon" className="user-icon" />
        </Link>
      </div>
    </footer>
  );
  
}

export default Footer;