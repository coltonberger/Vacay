import React, { Component } from 'react';
import '../../App.css';
import { logout } from '../../services/api';

class ToolBar extends Component {
  signOut = () => {
    logout();
    this.props.history.push('/')
  }
  render() {
    return (
      <div class="ui secondary  menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          Saved Schedules
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item" onClick={this.signOut}>
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default ToolBar;
