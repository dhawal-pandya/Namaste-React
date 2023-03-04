import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Body from '../Components/BodyParts/Body';

import { StaticRouter } from 'react-router-dom/server';

import { Provider } from 'react-redux';
import store from '../Store/store';
import { resData } from '../Mocks/resData';
import ResList from '../Components/Res/ResList';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resData);
    },
  });
});

test('Shimmer should work', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId('shimmer');
  //   expect(shimmer.children.length).toBeInTheDocument(); // not a good way to test it
  expect(shimmer.children.length).toBe(15);
});

test('Search Results should work', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    const searchBar = body.getByTestId('searchBar');
    const resList = body.getByTestId('resList');

    fireEvent.change(searchBar, {
      target: {
        value: 'Pizza',
      },
    });

    // expect(resList.children.length).toBe(15); // 15 comes from our mock data
    expect(resList.children.length).toBe(5);
  });
});
