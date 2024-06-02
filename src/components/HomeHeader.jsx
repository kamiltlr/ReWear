import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div className="hero-buttons">
    <Link to="/logowanie" className="login-button">Zaloguj</Link>
    <Link to="/rejestracja" className="login-button">Załóż konto</Link>
  </div>
  );
}

export default HomeHeader;