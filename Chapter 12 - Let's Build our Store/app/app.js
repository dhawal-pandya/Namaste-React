import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import UserContext from './src/Utils/UserContext';

import { Provider } from 'react-redux';
import store from './src/Store/store';

import './style.css';

import Header from './src/Components/Header/Header';
import Profile from './src/Components/Login/Profile';
import Footer from './src/Components/Footer/Footer';
import ResMenu from './src/Components/Res/ResMenu';
import Body from './src/Components/BodyParts/Body';

const About = lazy(() => import('./src/Components/BodyParts/About'));
const Contact = lazy(() => import('./src/Components/BodyParts/Contact'));
const Error = lazy(() => import('./src/Components/BodyParts/Error'));

const App = () => {
  // const [user, setUser] = useState({
  //   name: 'Dhawal',
  //   email: 'dhawalpandya.01@google.com',
  // });
  // eventually to add userSlice

  return (
    <Provider store={store}>
      {/* <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      > */}
      <Header />
      {/* m-0 font-sans bg-gradient-to-b from-black to-zinc-800' */}
      <Outlet />
      <Footer />
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={'Loading...'}>
        <Error />,
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'About',
        element: (
          <Suspense fallback={'Loading...'}>
            <About />,
          </Suspense>
        ),
        children: [
          {
            path: 'Profile',
            element: (
              <Suspense fallback={'Loading...'}>
                <Profile />,
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'Contact',
        element: (
          <Suspense fallback={'Loading...'}>
            <Contact />,
          </Suspense>
        ),
      },
      {
        path: 'ResMenu/:id',
        element: <ResMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
