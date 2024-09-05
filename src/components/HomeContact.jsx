import React, { useState } from 'react';
import axios from 'axios';

const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Pole nie może być puste';
  } else if (formData.name.split(' ').length > 1) {
    errors.name = 'Imię powinno być jednym wyrazem';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Pole nie może być puste';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Email powinien być poprawny';
  }
  
  if (!formData.message.trim()) {
    errors.message = 'Pole nie może być puste';
  } else if (formData.message.length < 120) {
    errors.message = 'Wiadomość musi mieć conajmniej 120 znaków';
  }
  
  return errors;
};

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

    setLoading(true);
    try {
      const response = await axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.status === 'success') {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrors({});
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Unexpected error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-img'>
        <img src='../public/assets/Background-Contact-Form.jpg' alt='Background for contact form' />
      </div>

      <div className='contact-form'>
        <div className='contact-hero'>
          <h1>Skontaktuj się z nami</h1>
          <img src='../public/assets/Decoration.svg' alt='decoration' />
        </div>

        {success && <p className='form-success'>Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>}

        <form onSubmit={handleFormSubmit} className='form-container'>
          <div className='form-text'>
            <div className='form-login'>
              <label htmlFor='name'>Wpisz swoje imię</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Krzysztof'
                value={formData.name}
                onChange={handleInputChange}
                required
                className={errors.name ? 'input-error-name' : ''}
              />
              {errors.name && <p className='form-error'>{errors.name}</p>}
            </div>

            <div className='form-email'>
              <label htmlFor='email'>Wpisz swój email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='abc@xyz.pl'
                value={formData.email}
                onChange={handleInputChange}
                required
                className={errors.email ? 'input-error-email' : ''}
              />
              {errors.email && <p className='form-error'>{errors.email}</p>}
            </div>
          </div>

          <div className='form-message'>
            <label htmlFor='message'>Wpisz swoją wiadomość</label>
            <textarea
              id='message' 
              name='message'
              placeholder='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni ducimus optio necessitatibus quo sapiente voluptatem consequuntur quibusdam dolore debitis, vitae culpa repudiandae minima, veritatis iusto laudantium labore, sit quam! Qui sed ut tempora a animi!'
              value={formData.message}
              onChange={handleInputChange}
              required
              className={errors.message ? 'input-error-message' : ''}
            />
            {errors.message && <p className='form-error'>{errors.message}</p>}
          </div>

          <button type='submit' className='form-btn'>
            Wyślij
          </button>
        </form>
      </div>

      <footer>
        <div className="footer">
            <div className="footer-text">
                <p>Copyright by Coders Lab</p>
            </div>

            <div className="footer-media">
                <img src="./public/assets/facebook.svg" alt="facebook"/>
                <img src="./public/assets/instagram.svg" alt="instagram"/>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeContact;
