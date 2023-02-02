import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className='footer'>
    <ul className='f-navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/About'>About</Link>
      </li>
      <li>
        <Link to='/Contact'>Contact</Link>
      </li>
    </ul>
    <div className='f-logo'>ChatKazz</div>
  </div>
);

export default Footer;
