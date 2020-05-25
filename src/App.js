import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
