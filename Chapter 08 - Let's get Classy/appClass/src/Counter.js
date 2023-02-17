import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.num,
    };
    this.positiveHandle = this.positiveHandle.bind(this);
    this.negativeHandle = this.negativeHandle.bind(this);
    console.log('counter constructor');
  }
  positiveHandle(e) {
    this.setState(() => this.state.count++);
  }
  negativeHandle(e) {
    this.setState(() => this.state.count--);
  }

  render() {
    console.log('counter render');
    return (
      <div className='counter'>
        <h3>Count: {this.state.count}</h3>
        <div className='counterButton'>
          <button onClick={this.positiveHandle}>___+___</button>
          <button onClick={this.negativeHandle}>___-___</button>
        </div>
      </div>
    );
  }
}

export default Counter;
