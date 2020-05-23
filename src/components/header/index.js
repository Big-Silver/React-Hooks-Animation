/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faSearch } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export default function Header(props) {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const show = toggleNav ? ' show mobile-nav' : '';

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light sticky-top custom-header'>
        <a className='navbar-brand' href='#'>
          iFIT
        </a>
        <button
          className='navbar-toggler text-white'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => {
            setToggleNav(!toggleNav);
            setToggleMenu(false);
          }}
        >
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>
        <div className={'collapse navbar-collapse' + show} id='navbarText'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                LOGIN
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                SIGN UP
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                onClick={() => {
                  setToggleNav(false);
                  setToggleMenu(!toggleMenu);
                }}
              >
                MENU
                <FontAwesomeIcon icon={faAlignJustify} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {toggleMenu && (
        <nav className='navbar navbar-expand-lg navbar-light custom-menu'>
          <a className='navbar-brand' href='#'>
            Weight Loss
          </a>
          <div className='collapse navbar-collapse show'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  OVERVIEW
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  FEATURES
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  PROGRAMS
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  TRAINING
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
