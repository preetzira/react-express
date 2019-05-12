import React, { Component } from 'react';
import './tooltip.css';

class Tooltip extends Component {

  render() {
    return (
      <div className={"tooltip "+this.props.class}>
          <div className="tooltip-arrow" />
          <div className="tooltip-label">{this.props.children}</div>
      </div>
    );
  }
}

export default Tooltip;
