import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, auth } from './Firebase';

const HomeHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header>
      <nav className="hero-buttons">
        {user ? (
          <>
            <span className='hero-account'>Cześć! {user.email}!</span>
            <Link to="/oddaj-rzeczy" className="hero-btn">Oddaj rzeczy</Link>
            <Link to="/wylogowano" className="hero-logout">Wyloguj</Link>
          </>
        ) : (
          <>
            <Link to="/logowanie" className="hero-login">Zaloguj</Link>
            <Link to="/rejestracja" className="hero-register">Załóż konto</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default HomeHeader;
