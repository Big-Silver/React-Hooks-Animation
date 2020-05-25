import React, { useState } from 'react';
import './heroImage.css';

export default function HeroImage(props) {
  return (
    <div className='hero-section'>
      {props.data.title.map((t, i) => (
        <p className='hero-title w3-animate-zoom' key={i}>{t}</p>
      ))}
      {props.data.description.map((d, i) => (
        <p className='hero-description w3-animate-zoom' key={i}>{d}</p>
      ))}
      {/* <p className='hero-title w3-animate-zoom'>WORKING OUT</p>
      <p className='hero-title w3-animate-zoom'>HAS NEVER BEEN SO FUN</p>
      <p className='hero-description w3-animate-zoom'>
        Welcome to the center of it all. The Fitness Shop presents you with
        hundreds of workout programs designed to guide your weight loss journey.
      </p> */}
    </div>
  );
}
