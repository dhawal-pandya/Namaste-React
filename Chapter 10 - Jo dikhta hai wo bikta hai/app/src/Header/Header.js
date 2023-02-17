import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

import useOnline from '../Utils/useOnline';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [btnTxt, setBtnTxt] = useState('LogIn');

  const isOnline = useOnline();

  const clickFormHandle = () => {
    setIsForm((isForm) => !isForm);
  };
  const clickLogoutHandle = () => {
    setBtnTxt('LogIn');
    setIsLoggedIn(() => false);
  };

  const link = 'pad';

  return (
    <div className='m-0 bg-slate-500 flex flex-row justify-evenly text-black p-3'>
      <Link to='/' className='text-center p-7 hover:text-white hover:font-bold'>
        ChatKazz
      </Link>
      <ul className='flex flex-row justify-evenly'>
        <li className='p-7 pr-2 hover:text-white hover:font-bold'>
          {isOnline ? '🟢' : '🔴'}
        </li>
        <li className='p-7 pr-2 hover:text-white hover:font-bold'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-7 pr-2 hover:text-white hover:font-bold'>
          <Link to='/About'>About</Link>
        </li>
        <li className='p-7 pr-2 hover:text-white hover:font-bold'>
          <Link to='/Contact'>Contact</Link>
        </li>
        {isLoggedIn ? (
          <li className='p-7 pr-2 hover:text-white hover:font-bold' id='cart'>
            Cart
          </li>
        ) : null}
        {isLoggedIn && (
          <li className='p-7 pr-2 hover:text-white hover:font-bold'>
            <button onClick={clickLogoutHandle}>LogOut</button>
          </li>
        )}
        {!isLoggedIn && (
          <li className='p-7 pr-2 hover:text-white hover:font-bold'>
            <button onClick={clickFormHandle}>{btnTxt}</button>
          </li>
        )}
      </ul>
      {isForm && !isLoggedIn && (
        <Login setIsLoggedIn={setIsLoggedIn} setIsForm={setIsForm} />
      )}
    </div>
  );
};

export default Header;
