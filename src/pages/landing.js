import React, { useState } from 'react';
import HeroImage from '../components/heroImage';
import Category from '../components/category';
import CustomCaruosel from '../components/carousel';
import Advertisement from '../components/advertisement';
import PedroImg from '../assets/images/Pedro.jpg';

const mockHero = {
  title: ['WORKING OUT', 'HAS NEVER BEEN SO FUN'],
  description: [
    'Welcome to the center of it all. The Fitness Shop presents you with hundreds of workout programs designed to guide your weight loss journey.',
  ],
};

const mockImages = (num) => {
  const newImages = Array(num).fill({
    src: PedroImg,
    name: 'Get Fit with Jillian Michaels',
    title: 'weight losss',
  });
  return newImages;
};

const mockCarousel = () => {
  const newCarousel = Array(3).fill({
    title:
      'To date I have lost 14 Kilos (30 pounds) and my fitnes level is at least the same as when I was activity engaged in sport (if not better), thanks to iFit and the range and variation of fitness programs available.',
    author: '- Graham Lambourne',
  });
  return newCarousel;
};

export default function LandingPage(props) {
  const [categoryImgs, setCategoryImgs] = useState(mockImages(12));

  return (
    <div>
      <HeroImage data={mockHero} />
      <Category
        data={categoryImgs}
        viewMore={() => setCategoryImgs(categoryImgs.concat(mockImages(4)))}
      />
      <CustomCaruosel data={mockCarousel()} />
      <Advertisement />
    </div>
  );
}
