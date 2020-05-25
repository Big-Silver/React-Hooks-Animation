import React, { useState } from 'react';
import HeroImage from '../heroImage';
import Category from '../category';
import CustomCaruosel from '../carousel';
import Advertisement from '../advertisement';
import PedroImg from '../../assets/images/Pedro.jpg';

const mockHero = {
  title: ['WORKING OUT', 'HAS NEVER BEEN SO FUN'],
  description: [
    'Welcome to the center of it all. The Fitness Shop presents you with hundreds of workout programs designed to guide your weight loss journey.',
  ],
};

const mockImages = () => {
  const newImages = [];
  let i = 0;
  while (i < 12) {
    newImages.push({
      src: PedroImg,
      name: 'Get Fit with Jillian Michaels',
      title: 'weight losss',
    });
    i++;
  }
  return newImages;
};

const mockCarousel = () => {
  const newCarousel = [];
  let i = 0;
  while (i < 3) {
    newCarousel.push({
      title:
        'To date I have lost 14 Kilos (30 pounds) and my fitnes level is at least the same as when I was activity engaged in sport (if not better), thanks to iFit and the range and variation of fitness programs available.',
      author: '- Graham Lambourne',
    });
    i++;
  }
  return newCarousel;
};

export default function LandingPage(props) {
  const [hero] = useState(mockHero);
  const [categoryImgs, setCategoryImgs] = useState(mockImages);
  const [carousel] = useState(mockCarousel);

  const viewMore = () => {
    const newCategoryImgs = categoryImgs.slice();
    for (let i = 0; i < 4; i++) {
      newCategoryImgs.push({
        src: PedroImg,
        name: 'Get Fit with Jillian Michaels',
        title: 'weight losss',
      });
    }
    return newCategoryImgs;
  };

  return (
    <div>
      <HeroImage data={hero} />
      <Category
        data={categoryImgs}
        viewMore={() => setCategoryImgs(viewMore)}
      />
      <CustomCaruosel data={carousel} />
      <Advertisement />
    </div>
  );
}
