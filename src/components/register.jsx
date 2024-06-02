import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

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

  if (!formData.password2.trim()) {
    errors.password2 = 'Pole nie może być puste';
  } else if (formData.password2.length < 6) {
    errors.password2 = 'Podane hasło jest za krótkie!';
  } else if (formData.password !== formData.password2) {
    errors.password2 = 'Hasła muszą być takie same!';
  }

  return errors;
};

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/');
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-text">
        <h2>Załóż konto</h2>
        <img src="../src/assets/Decoration.svg" alt="decoration" />
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="register-form">
          <div className="register-email">
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
            {errors.email && <p className="register-error">{errors.email}</p>}
          </div>

          <div className="register-password">
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
            {errors.password && <p className="register-error">{errors.password}</p>}
          </div>

          <div className="register-password">
            <label htmlFor="password2">Powtórz hasło</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={formData.password2}
              onChange={handleInputChange}
              required
              className={errors.password2 ? 'input-error-password' : ''}
            />
            {errors.password2 && <p className="register-error">{errors.password2}</p>}
          </div>
        </div>

        <div className="register-buttons">
          <Link to="/logowanie" className="login-btn2">Zaloguj się</Link>
          <button type="submit" className="register-btn2">Załóż konto</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
