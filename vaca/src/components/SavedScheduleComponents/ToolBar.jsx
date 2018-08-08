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
      <div className="ui secondary  menu">
        <a className="item" href='/dashboard'>
          Home
        </a>
        <a className="active item" href='/savedschedules'>
          Saved Schedules
        </a>
        <div className="right menu">
          <div className="item">
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
