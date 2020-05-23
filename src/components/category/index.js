import React, { useState } from 'react';
import './category.css';

export default function Category(props) {
  return (
    <div className='container category'>
      <div className='category-text'>
        <p className='category-title'>Weight Loss</p>
        <p className='category-description'>
          Welcome to the center of it all. The Fitness Shop presents you with
          hundreds of workout programs designed to guide your weight loss
          journey.
        </p>
      </div>
      <div className='category-images'>
        {console.log(props.data)}
        {props.data.map((d) => (
          <div className='card'>
            <img
              className='card-img-top'
              src={d.src}
              alt={'Card image cap' + d.src}
            />
            <div className='card-body'>
              <p className='card-title'>{d.name}</p>
              <p className='card-text'>{d.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='category-more'>VIEW MORE</button>
    </div>
  );
}
