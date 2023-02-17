import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btnTxt, setBtnTxt] = useState('Login');

  const clickHandle = () => {
    setIsLoggedIn(!isLoggedIn);
    if (btnTxt === 'LogIn') setBtnTxt('LogOut');
    if (btnTxt === 'LogOut') setBtnTxt('LogIn');
  };

  return (
    <div className='header-wrapper'>
      <div className='logo'>Lettuce Spice</div>

      <ul className='navbar'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {isLoggedIn ? <li id='cart'>Cart</li> : null}
        <button onClick={clickHandle}>{btnTxt}</button>
      </ul>
    </div>
  );
};
export default Header;
