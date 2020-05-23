import React, { useState } from 'react';
import HeroImage from '../heroImage';
import Category from '../category';
import PedroImg from '../../assets/images/Pedro.jpg';

const mockImages = () => {
  const newImages = [];
  let i = 0;
  while (i < 16) {
    newImages.push({
      src: PedroImg,
      name: 'Get Fit with Jillian Michaels',
      title: 'weight losss',
    });
    i++;
  }
  return newImages;
};


export default function LandingPage(props) {
  return (
    <div>
      <HeroImage />
      <Category data={mockImages()} />
    </div>
  );
}
