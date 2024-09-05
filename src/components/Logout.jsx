import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from './Firebase';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await signOut(auth);
      navigate('/wylogowano');
    };
    logout();
  }, [navigate]);

  return (
    <div className='logut'>
        <div className='logout-text'>
            <h2>Wylogowanie nastąpiło pomyślnie!</h2>
            <img src="../public/assets/Decoration.svg" alt="decoration" />
            <Link to="/" className="home-btn">Strona główna</Link>
        </div>
      </div>
  );
}

export default Logout;
