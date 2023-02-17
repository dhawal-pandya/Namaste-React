import React from 'react';

class ColorShift extends React.Component {
  constructor(props) {
    super(props);

    this.colorChangeHandle = this.colorChangeHandle.bind(this);
    this.colorChange = this.props.colorChange();
    console.log('colorshift constructor');
  }

  colorChangeHandle() {
    this.props.colorChange();
  }

  render() {
    console.log('colorshift render');
    return (
      <div
        className={`colorShift ${this.props.color}`}
        onClick={this.colorChangeHandle}
      >
        ColorShift
      </div>
    );
  }
}

export default ColorShift;
