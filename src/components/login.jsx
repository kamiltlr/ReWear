import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const validateForm = (formData) => {
  const errors = {};
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Pole nie może być puste';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Podany email jest nieprawidłowy!';
  }
  
  if (!formData.password.trim()) {
    errors.password = 'Pole nie może być puste';
  } else if (formData.password.length < 6) {
    errors.password = 'Podane hasło jest za krótkie!';
  }
  
  return errors;
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    const updatedErrors = { ...errors };
    const fieldErrors = validateForm({ ...formData, [name]: value });
    
    if (fieldErrors[name]) {
      updatedErrors[name] = fieldErrors[name];
    } else {
      delete updatedErrors[name];
    }

    setErrors(updatedErrors);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <div className="login-container">
      <div className="login-text">
        <h2>Zaloguj się</h2>
        <img src="../src/assets/Decoration.svg" alt="decoration" />
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="login-form">
          <div className="login-email">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={errors.email ? 'input-error-email' : ''}
            />
            {errors.email && <p className="login-error">{errors.email}</p>}
          </div>

          <div className="login-password">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className={errors.password ? 'input-error-password' : ''}
            />
            {errors.password && <p className="login-error">{errors.password}</p>}
          </div>
        </div>

        <div className="login-buttons">
          <Link to="/register" className="register-btn">Załóż konto</Link>
          <button type="submit" className="login-btn">Zaloguj się</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
