const h1w = React.createElement('h1', { id: 'world' }, 'Namaste World');
const h1e = React.createElement('h1', { id: 'everyone' }, 'Namaste Everyone');
const h1d = React.createElement('h1', { id: 'dhawal' }, 'Namaste Dhawal');
const h1 = React.createElement('h1', {}, 'Namaste!');
const wrapper = React.createElement('h1', { id: 'wrapper' }, [
  h1w,
  h1e,
  h1d,
  h1,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(wrapper);
