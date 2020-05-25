import React from 'react';
import { ViewMoreButton } from '../buttons';
import './advertisement.css';

export default function Advertisement(props) {
  return (
    <div className='custom-advertisement d-flex align-items-center'>
      <p className='custom-advertisement-title'>Get started on your weight loss journey</p>
      <ViewMoreButton text='JOIN IFIT TODAY' />
    </div>
  );
}