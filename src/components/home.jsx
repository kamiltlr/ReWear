import React from 'react';

import HomeHeader from './HomeHeader';
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';

function Home() {
  return (
    <div className='hero-container hero-img'>
      <HomeHeader />
      <HomeNavigation />
      <HomeMain />
    </div>
  );
}

export default Home;