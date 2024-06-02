import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
    return (
      <div className='logut'>
        <div className='logout-text'>
            <h2>Wylogowanie nastąpiło pomyślnie!</h2>
            <img src="../src/assets/Decoration.svg" alt="decoration" />
            <Link to="/" className="home-btn">Strona główna</Link>
        </div>
      </div>
    );
  }

export default Logout;