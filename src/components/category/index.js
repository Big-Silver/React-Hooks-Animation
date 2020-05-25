import React, { useState } from 'react';
import { ViewMoreButton } from '../buttons';
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
        {props.data.map((d, i) => (
          <div className='card' key={i}>
            <img
              className='card-img-top'
              src={d.src}
              alt={'Card image cap' + d.src}
            />
            <span className='custom-card-ribbon'></span>
            <div className='card-body'>
              <p className='card-title'>{d.name}</p>
              <p className='card-text'>{d.title}</p>
            </div>
          </div>
        ))}
      </div>
      <ViewMoreButton onClick={props.viewMore} text='VIEW MORE' />
    </div>
  );
}
