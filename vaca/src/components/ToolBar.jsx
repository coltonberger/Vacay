import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          Vaca
        </div>
        <a className="item">
          About Us
        </a>
        <a className="item">
          Login
        </a>
        <a className="item">
          Signup
        </a>
      </div>
    );
  }
}

export default ToolBar;
