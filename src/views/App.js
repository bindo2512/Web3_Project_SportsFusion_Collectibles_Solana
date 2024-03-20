import './App.css';
import React from 'react';
import NavbarComponent from '../components/navbar';
import IntroComponent from '../components/intro';
import FooterComponent from '../components/footer';
import CollectionVideo from '../components/collection';
import TeamCollections from '../components/teamcollection';
import EmailComponent from '../components/email';
import EPLTeamCollections from '../components/eplteamcollection';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MintNFT from '../routes/MintNFT';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<React.Fragment>
            <IntroComponent />
            <hr />
            <TeamCollections />
            <hr />
            <CollectionVideo />
            <hr />
            <EPLTeamCollections />
            <EmailComponent />
          </React.Fragment>} />
          <Route path="/mint-nft" element={<MintNFT />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
