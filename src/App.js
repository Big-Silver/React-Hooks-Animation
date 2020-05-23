import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './components/landing';
import * as ROUTES from './consts/routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path={ROUTES.LANDING} component={LandingPage} />
      </div>
    </Router>
  );
}

export default App;
