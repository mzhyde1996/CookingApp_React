import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-buttons">
        <Link to = "/" className="left-button">
            <img src={require('../../assets/icons/home.png')} alt="User Icon" className="user-icon" />
        </Link>
        <h1 className="header-title">Recipe ROULETTE</h1>
        <Link to="/login" className="right-button">
            <img src={require('../../assets/icons/user.png')} alt="User Icon" className="user-icon" />
        </Link>
      </div>
    </header>
  );
  
}

export default Header;
