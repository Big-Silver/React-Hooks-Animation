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
      {props.data.map((carousel, i) => {
        return (
          <Carousel.Item key={i}>
            <Carousel.Caption>
              <div className='d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className='cCarousel-quote'
                />
                <p className='cCarousel-title'>{carousel.title}</p>
              </div>
              <p className='cCarousel-author'>{carousel.author}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
