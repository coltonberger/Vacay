import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div>
      <button id="log-out" className="ui button">
        Log Out
      </button>
      <button id="save-schedule"className="ui primary button">
        Save Schedule
      </button>
      </div>
    );
  }
}

export default ToolBar;
