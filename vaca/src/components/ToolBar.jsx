import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div class="ui menu">
        <div class="header item">
          Vacay
        </div>
        <a class="item">
          About Us
        </a>
        <a class="item">
          Login
        </a>
        <a class="item">
          Signup
        </a>
      </div>
    );
  }
}

export default ToolBar;
