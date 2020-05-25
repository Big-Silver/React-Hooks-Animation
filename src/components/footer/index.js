/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faGoogle,
  faPinterestP,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Dropdown } from 'react-bootstrap';
import './footer.css';

const contacts = [
  {
    title: 'BLOG-VIDEOS',
    url: '#',
  },
  {
    title: 'SHOP',
    url: '#',
  },
  {
    title: 'COMPANY',
    url: '#',
  },
  {
    title: 'PRESS',
    url: '#',
  },
  {
    title: 'JOBS',
    url: '#',
  },
  {
    title: 'SUPPORT',
    url: '#',
  },
  {
    title: 'LEGAL',
    url: '#',
  },
  {
    title: 'CONTACT',
    url: '#',
  },
];

const socialMedias = [
  {
    src: faFacebookF,
    href: '#',
  },
  {
    src: faTwitter,
    href: '#',
  },
  {
    src: faGoogle,
    href: '#',
  },
  {
    src: faPinterestP,
    href: '#',
  },
  {
    src: faInstagram,
    href: '#',
  },
  {
    src: faYoutube,
    href: '#',
  },
];

const languages = ['ENGLISH', 'FRENCH', 'SPAINISH', 'PORTUGUESE', 'DUTCH'];

export default function Footer(props) {
  const [selectedLang, setSelectedLang] = useState('ENGLISH');

  return (
    <footer>
      <div className='container-fluid'>
        <div className='row d-flex custom-footer align-items-center'>
          <div className='cFooter-contact d-flex col-md-8 col-sm-12'>
            <ul className='d-flex cFooter-contact-list'>
              {contacts.map((contact, i) => {
                return (
                  <li key={i}>
                    {i ? <span className='show-desktop'> / </span> : null}
                    <a href={contact.url}>{contact.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul className='d-flex cFooter-social'>
              {socialMedias.map((social, i) => (
                <li key={i}>
                  <a href={social.href}>
                    <FontAwesomeIcon icon={social.src} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='cFooter-copyright d-flex align-items-center justify-content-center col-md-4 col-sm-12'>
            <p>Copyright iFitcom. All rights reserved.</p>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-language'>
                Language: {selectedLang}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {languages.map((lang, i) => {
                  return (
                    <Dropdown.Item onClick={() => setSelectedLang(lang)} key={i}>
                      {lang}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </footer>
  );
}
