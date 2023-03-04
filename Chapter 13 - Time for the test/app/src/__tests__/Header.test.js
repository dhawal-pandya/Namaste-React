import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Header from '../Components/Header/Header';

import { StaticRouter } from 'react-router-dom/server';

import { Provider } from 'react-redux';
import store from '../Store/store';

test('Logo should load on rendering Header', () => {
  //Load Header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //   const logo = header.getAllByTestId('logo'); // getAllByTestId returns an array
  const logo = header.getByTestId('logo');

  //   console.log(logo);
  //Check if the header has the name

  expect(logo.innerHTML).toBe('ChatKazz');
});

test('Online Status should green on rendering Header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId('onlineStatus');

  expect(onlineStatus.innerHTML).toBe('🟢');
});

test('Cart should have 0 items on rendering Header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //   fireEvent();

  const cartItems = header.getByTestId('cartItems');

  expect(cartItems.innerHTML).toBe('0');
});
