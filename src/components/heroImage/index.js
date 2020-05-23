import React, { useState } from 'react';
import './heroImage.css';
import heroImg from '../../assets/images/termsofuse.png';

export default function HeroImage(props) {
  return (
    <div>
      <img src={heroImg} alt='heroImg'></img>
    </div>
  );
}
