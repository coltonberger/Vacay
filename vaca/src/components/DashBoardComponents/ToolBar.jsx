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
        <a className="active item">
          Home
        </a>
        <a className="item">
          Saved Schedules
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item" onClick={this.signOut}>
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default ToolBar;
