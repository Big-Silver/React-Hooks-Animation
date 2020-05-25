import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './carousel.css';

export default function CustomCaruosel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={true}
      controls={false}
    >
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex justify-content-center align-items-center'>
            <FontAwesomeIcon icon={faQuoteLeft} className='cCarousel-quote' />
            <p className='cCarousel-title'>
              To date I have lost 14 Kilos (30 pounds) and my fitnes level is at
              least the same as when I was activity engaged in sport (if not
              better), thanks to iFit and the range and variation of fitness
              programs available.
            </p>
          </div>
          <p className='cCarousel-author'>-Graham Lambourne</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <div className='d-flex justify-content-center align-items-center'>
            <FontAwesomeIcon icon={faQuoteLeft} className='cCarousel-quote' />
            <p className='cCarousel-title'>
              To date I have lost 14 Kilos (30 pounds) and my fitnes level is at
              least the same as when I was activity engaged in sport (if not
              better), thanks to iFit and the range and variation of fitness
              programs available.
            </p>
          </div>
          <p className='cCarousel-author'>-Graham Lambourne</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
