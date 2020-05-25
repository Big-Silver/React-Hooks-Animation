import React from 'react';
import './viewMoreButton.css';

export default function ViewMoreButton(props) {
  return (
    <button className='view-more' onClick={props.onClick}>{props.text}</button>
  );
}