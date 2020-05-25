import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../pages/landing';

export default function Routes() {
  return (
    <>
      <Route path='/' component={LandingPage} />
    </>
  );
}