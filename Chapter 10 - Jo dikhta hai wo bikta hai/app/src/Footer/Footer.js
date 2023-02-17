import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className='text-center text-black '>
    <ul className='flex justify-evenly bg-slate-500'>
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
    <div>ChatKazz - Copyright 2023</div>
  </div>
);

export default Footer;
