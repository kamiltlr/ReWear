import React from 'react';
import { Link } from 'react-scroll';

function HomeNavigation() {
  return (
    <div className='navigation'>
      <div className='navigation-columns'>
        <div className="navigation-btn-container">
          <Link to="start" smooth={true} duration={500}>
            <button className='navi-btn navi-btn-main'>Start</button>
          </Link>

          <Link to="about" smooth={true} duration={500}>
            <button className='navi-btn'>O co chodzi?</button>
          </Link>

          <Link to="us" smooth={true} duration={500}>
            <button className='navi-btn'>O nas</button>
          </Link>

          <Link to="foundation" smooth={true} duration={500}>
            <button className='navi-btn'>Fundacja i organizacje</button>
          </Link>
          
          <Link to="contact" smooth={true} duration={500}>
            <button className='navi-btn'>Kontakt</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNavigation;

