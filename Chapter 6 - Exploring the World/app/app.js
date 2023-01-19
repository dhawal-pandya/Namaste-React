import React from 'react';

import ReactDOM, { createRoot } from 'react-dom/client';
import './style.css';

import Header from './src/Header/Header';
import Body from './src/Body/Body';
import Footer from './src/Footer/Footer';

const App = () => (
  <div className='app'>
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
