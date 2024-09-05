import React from 'react';
import { Link } from 'react-router-dom';

function HomeSimpleStep() {
    return (
        <div id='about' className='about'>
            <div className='about-text'>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src="./assets/Decoration.svg" alt="decoration"></img>
            </div>

            <div className='about-columns'>
                <div className="about-column">
                    <img src="./assets/Icon-1.svg" alt="icon" />
                    <p>Wybierz rzeczy</p>
                    <span>────────</span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
        
                <div className="about-column">
                    <img src="./assets/Icon-2.svg" alt="icon" />
                    <p>Spakuj je</p>
                    <span>────────</span>
                    <p>skorzystaj z worków na śmieci</p>
                </div>

                <div className="about-column">
                    <img src="./assets/Icon-3.svg" alt="icon" />
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <span>────────</span>
                    <p>wybierz zaufane miejsce</p>
                </div>

                <div className="about-column">
                    <img src="./assets/Icon-4.svg" alt="icon" />
                    <p>Zamów kuriera</p>
                    <span>────────</span>
                    <p>kurier przyjdzie w dogodnym terminie</p>
                </div>
            </div>

            <div className="about-button">
            <Link to="/login" className="login-button">
                <button className='about-btn'>Oddaj rzeczy</button>
                </Link>
            </div>    
        </div>
    )
}

export default HomeSimpleStep;