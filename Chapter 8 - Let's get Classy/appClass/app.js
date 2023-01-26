import React from 'react';
import ReactDOM from 'react-dom/client';
import ColorShift from './src/ColorShift';
import Counter from './src/Counter';

class Body extends React.Component {
  constructor(props) {
    super(props);
    console.log('body constructor');
  }

  render() {
    console.log('body render');
    return (
      <div className='body'>
        <h1>{`Hello, ${this.props.data}`}</h1>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
    };

    this.colorChange = this.colorChange.bind(this);
    console.log('app constructor');
  }

  colorChange() {
    if (this.state.color === 'red') {
      this.setState({ color: 'blue' });
    }
    if (this.state.color === 'blue') {
      this.setState({ color: 'green' });
    }
    if (this.state.color === 'green') {
      this.setState({ color: 'red' });
    }
  }

  render() {
    console.log('app render');
    return (
      <div>
        <Body data={'Albus'} />
        <Counter num={0} />
        <ColorShift color={this.state.color} colorChange={this.colorChange} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
