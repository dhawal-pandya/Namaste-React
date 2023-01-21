import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './style.css';

import Header from './src/Header/Header';
import Body from './src/BodyParts/Body';
import About from './src/BodyParts/About';
import Error from './src/BodyParts/Error';
import Footer from './src/Footer/Footer';
import Contact from './src/BodyParts/Contact';
import ResMenu from './src/Res/ResMenu';

const App = () => (
  <div className='app'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/ResMenu/:id',
        element: <ResMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
