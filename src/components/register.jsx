import React from 'react';

function Register() {
  return (
    <div className="register-container">
      <h2>Rejestracja</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Hasło:</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Potwierdź Hasło:</label>
          <input type="password" name="confirmPassword" required />
        </div>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
}

export default Register;
