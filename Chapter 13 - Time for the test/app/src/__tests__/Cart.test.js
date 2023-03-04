import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Header from '../Components/Header/Header';
import ResMenu from '../Components/Res/ResMenu';
import Cart from '../Components/Cart/Cart';

import { StaticRouter } from 'react-router-dom/server';

import { Provider } from 'react-redux';
import store from '../Store/store';
import { menuData } from '../Mocks/menuData';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(menuData);
    },
  });
});

test('Cart should show correct number of menuItems', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <ResMenu />
      </Provider>
    </StaticRouter>
  );
  let menuButton;
  await waitFor(() => {
    menuButton = body.getByTestId('menuButton');
  });
  fireEvent.click(menuButton);

  const menuItems = body.getAllByTestId('menuItem');
  for (let i = 0; i < 3; i++) {
    fireEvent.click(menuItems[i]);
  }

  const cartItems = body.getByTestId('cartItems');
  expect(cartItems.innerHTML).toBe('3');
});

test('Cart should update on selecting menuItems', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Cart />
        <Header />
        <ResMenu />
      </Provider>
    </StaticRouter>
  );

  let menuButton;
  await waitFor(() => {
    menuButton = body.getByTestId('menuButton');
  });
  fireEvent.click(menuButton);

  const menuItems = body.getAllByTestId('menuItem');
  const cartListItems = body.getAllByTestId('cartListItems');

  expect(cartListItems.length).toBe(3); // 3 from earlier test..
});
