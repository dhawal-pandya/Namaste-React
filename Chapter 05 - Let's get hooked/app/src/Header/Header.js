import React from 'react';

const Header = () => (
  <div className='header-wrapper'>
    <div className='logo'>Lettuce Spice</div>

    <ul className='navbar'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li id='cart'>Cart</li>
    </ul>
  </div>
);

export default Header;
