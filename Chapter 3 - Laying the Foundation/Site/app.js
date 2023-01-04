import React from 'react';
import ReactDOM from 'react-dom/client';

import dot from './assets/dot.png';
import userIcon from './assets/user-icon.png';

const Header = () => (
  <div className='wrapper'>
    <img className='dot' src={dot} alt='logo' />
    <form id='form'>
      <input className='search' type='search' id='query' placeholder='Search' />
    </form>
    <img className='userIcon' src={userIcon} alt='user-icon' />
  </div>
);

console.log(Header);
console.log('If you can see this, means my Babel is not configured properly');
const Nested = () => (
  <div className='level1'>
    <h1>This nested inside a div.</h1>
    <div className='level2'>
      <h2>This is nested twice.</h2>
      <div className='level3'>
        <h3>This is nested three times.</h3>
      </div>
    </div>
  </div>
);

const App = () => (
  <div>
    <Header />
    {/* this is the recommended way */}
    {Nested()}
    {/* but even this is technically correct as it is merely executing a function */}
  </div>
);

//Root Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
