import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

import useOnline from '../Utils/useOnline';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [btnTxt, setBtnTxt] = useState('Login');

  const isOnline = useOnline();

  const clickFormHandle = () => {
    setIsForm((isForm) => !isForm);
  };
  const clickLogoutHandle = () => {
    setBtnTxt('Logout');
    setIsLoggedIn(() => false);
  };

  return (
    <div className='header-wrapper'>
      <Link to='/' className='logo'>
        ChatKazz
      </Link>
      <ul className='navbar'>
        <li>{isOnline ? '🟢' : '🔴'}</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        {isLoggedIn ? <li id='cart'>Cart</li> : null}
        {isLoggedIn && <button onClick={clickLogoutHandle}>Log Out</button>}
        {!isLoggedIn && <button onClick={clickFormHandle}>{btnTxt}</button>}
      </ul>
      {isForm && !isLoggedIn && (
        <Login setIsLoggedIn={setIsLoggedIn} setIsForm={setIsForm} />
      )}
    </div>
  );
};

export default Header;
