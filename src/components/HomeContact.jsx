import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/thank-you');
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-img'>
        <img src='/src/assets/Background-Contact-Form.jpg' alt='Background for contact form' />
      </div>

      <div className='contact-form'>
        <div className='contact-hero'>
          <h1>Skontaktuj się z nami</h1>
          <img src='../src/assets/Decoration.svg' alt='decoration' />
        </div>

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
              />
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
              />
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
            />
          </div>

          <button type='submit' className='form-btn'>Wyślij</button>
        </form>
      </div>

      <footer>
        <div className="footer">
            <div className="footer-text">
                <p>Copyright by Coders Lab</p>
            </div>

            <div className="footer-media">
                <img src="./src/assets/facebook.svg" alt="facebook"/>
                <img src="./src/assets/instagram.svg" alt="instagram"/>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeContact;
