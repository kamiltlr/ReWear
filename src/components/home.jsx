import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeUs from './HomeUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Layout>
            <div className='hero-container hero-img'>
              <HomeMain />
              <HomeThreeColumns />
              <HomeSimpleSteps />
              <HomeUs />
              <HomeWhoWeHelp />
              <HomeContact />
            </div>
          </Layout>
        } />
        <Route path="/logowanie" element={
          <Layout>
            <Login />
          </Layout>
        } />
        <Route path="/rejestracja" element={
          <Layout>
            <Register />
          </Layout>
        } />
        <Route path="/wylogowano" element={
          <Layout>
            <Logout />
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default Home;
