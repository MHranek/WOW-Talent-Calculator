import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './components/Navigate';
import Home from './components/pages/Home';
import Dragonflight from './components/pages/Dragonflight';
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
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Navigate currentPage={currentPage} handlePageChange={handlePageChange} />
      <Row>
        {renderPage()}
      </Row>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
