import React from 'react';
import { Link } from 'react-router-dom';

function HomeMain() {
    return (
        <div className='main'>
            <div className='main-text'>
              <p>Zacznij pomagać!</p>
              <p>Oddaj niechciane rzeczy w zaufane ręce</p>
              <img src="../public/assets/Decoration.svg" alt="decoration" />
            </div>

            <div className="main-buttons">
            <Link to="/login" className="login-button">
                <button className='main-btn'>Oddaj rzeczy</button>
                </Link>
            <Link to="/register" className="login-button">
                <button className='main-btn'>Zorganizuj zbiórkę</button>
                </Link>
            </div>
        </div>
    );
  }

export default HomeMain;