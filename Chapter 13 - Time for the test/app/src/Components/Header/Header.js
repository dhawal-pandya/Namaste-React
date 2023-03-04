import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Login from '../Login/Login';
import Cart from '../Cart/Cart';

import useOnline from '../../Utils/useOnline';
import UserContext from '../../Utils/UserContext';

import { useSelector } from 'react-redux';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [btnTxt, setBtnTxt] = useState('LogIn');

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const clickCartHandle = () => {
    setIsCart((isCart) => !isCart);
  };

  const clickFormHandle = () => {
    setIsForm((isForm) => !isForm);
  };

  const clickLogoutHandle = () => {
    setBtnTxt('LogIn');
    setIsLoggedIn(() => false);
  };

  return (
    <div className='m-0 bg-slate-900 flex flex-row justify-between text-white'>
      <Link
        to='/'
        data-testid='logo'
        className='text-center font-serif p-7 hover:text-white hover:font-bold'
      >
        ChatKazz
      </Link>
      <ul className='flex flex-row justify-evenly [&>*]:pr-3'>
        <li
          data-testid='onlineStatus'
          className='py-7  px-2 hover:text-white hover:font-bold'
        >
          {isOnline ? '🟢' : '🔴'}
        </li>
        <li className='py-7  hover:text-white hover:font-bold'>
          <Link to='/'>Home</Link>
        </li>
        <li className='py-7  hover:text-white hover:font-bold'>
          <Link to='/About'>About</Link>
        </li>
        <li className='py-7  hover:text-white hover:font-bold'>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li className='py-7 hover:text-white hover:font-bold' id='cart'>
          <div onClick={clickCartHandle}>
            Cart <sup data-testid='cartItems'>{cartItems.length}</sup>
          </div>
        </li>
        {isLoggedIn && (
          <li className='py-7  hover:text-white hover:font-bold'>
            <button onClick={clickLogoutHandle}>LogOut</button>
          </li>
        )}
        {!isLoggedIn && (
          <li className='p-7 hover:text-white hover:font-bold'>
            <button onClick={clickFormHandle}>{btnTxt}</button>
          </li>
        )}
      </ul>
      {isForm && !isLoggedIn && (
        <Login setIsLoggedIn={setIsLoggedIn} setIsForm={setIsForm} />
      )}
      {isCart && isLoggedIn && <Cart user={user.name} setIsCart={setIsCart} />}
    </div>
  );
};

export default Header;
