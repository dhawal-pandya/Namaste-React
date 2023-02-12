import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './style.css';

import Header from './src/Header/Header';
import Profile from './src/Login/Profile';
import Footer from './src/Footer/Footer';
import ResMenu from './src/Res/ResMenu';
import Body from './src/BodyParts/Body';

const About = lazy(() => import('./src/BodyParts/About'));
const Contact = lazy(() => import('./src/BodyParts/Contact'));
const Error = lazy(() => import('./src/BodyParts/Error'));

const App = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

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
