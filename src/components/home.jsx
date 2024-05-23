import React from 'react';

import HomeHeader from './HomeHeader';
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns'

function Home() {
  return (
    <div className='hero-container hero-img'>
      <HomeHeader />
      <HomeNavigation />
      <HomeMain />
      <HomeThreeColumns />
    </div>
  );
}

export default Home;