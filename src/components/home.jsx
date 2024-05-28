import React from 'react';

import HomeHeader from './HomeHeader';
import HomeNavigation from './HomeNavigation';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeUs from './HomeUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';

function Home() {
  return (
    <div className='hero-container hero-img'>
      <HomeHeader />
      <HomeNavigation />
      <HomeMain />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeUs />
      <HomeWhoWeHelp />
    </div>
  );
}

export default Home;