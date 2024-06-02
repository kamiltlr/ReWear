import React from 'react';
import HomeHeader from './HomeHeader';
import HomeNavigation from './HomeNavigation';

function Layout({ children }) {
  return (
    <div>
      <HomeHeader />
      <HomeNavigation />
      {children}
    </div>
  );
}

export default Layout;
