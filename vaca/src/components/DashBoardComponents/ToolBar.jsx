import React, { Component } from 'react';
import '../../App.css';

class ToolBar extends Component {
  render() {
    return (
      <div>
      <button id="log-out" className="ui primary button pull-right">
        Save Schedule
      </button>
      <button id="save-schedule"className="ui button">
        Log Out
      </button>
      </div>
    );
  }
}

export default ToolBar;
