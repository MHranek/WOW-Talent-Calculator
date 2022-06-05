import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './components/Navigate';
import Home from './components/pages/Home';
import Dragonflight from './components/pages/Dragonflight';
import TBC from './components/pages/TBC';
import Shadowlands from './components/pages/Shadowlands';
import WOTLK from './components/pages/WOTLK';
import Col from './utils/Col';
import Row from './utils/Row';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Dragonflight') {
      return <Dragonflight />;
    }
    if (currentPage === 'TBC') {
      return <TBC />;
    }
    if (currentPage === 'Shadowlands') {
      return <Shadowlands />;
    }
    if (currentPage === 'WOTLK') {
      return <WOTLK />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Navigate currentPage={currentPage} handlePageChange={handlePageChange} />
      <header className="App-header">
        <Col size="md-10">
          {renderPage()}
        </Col>
      </header>
    </div>
  );
}

export default App;
