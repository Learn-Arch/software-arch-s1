import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, onSignOut }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className="header__nav">
        {isLoggedIn ? (
          <button onClick={onSignOut} className="header__button">Log out</button>
        ) : (
          <Link to="/signin" className="header__link">Log in</Link>
        )}
      </nav>
    </header>
  );
}

export default Header; 