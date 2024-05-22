import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div className="hero-buttons">
    <Link to="/login" className="login-button">Zaloguj</Link>
    <Link to="/register" className="login-button">Załóż konto</Link>
  </div>
  );
}

export default HomeHeader;