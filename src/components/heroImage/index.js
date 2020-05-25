import React from 'react';
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
    </div>
  );
}
