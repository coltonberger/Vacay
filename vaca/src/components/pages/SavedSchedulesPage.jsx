import React, { Component } from 'react';
import ToolBar from '../SavedScheduleComponents/ToolBar'
import ScheduleList from '../SavedScheduleComponents/ScheduleList'



class SavedSchedulesPage extends Component {

  render() {

    return (
      <div>
        <ToolBar/>
        <ScheduleList/>
      </div>
    );
  }
}

export default SavedSchedulesPage;
