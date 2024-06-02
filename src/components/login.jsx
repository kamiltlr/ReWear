import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-text">
        <h2>Zaloguj się</h2>
        <img src="../src/assets/Decoration.svg" alt="decoration"></img>
      </div>

      <form>
        <div className="login-form">
          <div className='login-email'>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className='login-password'>
            <label>Hasło</label>
            <input type="password" name="password" required />
          </div>
        </div>

        <div className="login-buttons">
          <Link to="/register" className="register-btn">Załóż konto</Link>
          <button type="submit" className='login-btn'>Zaloguj się</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
