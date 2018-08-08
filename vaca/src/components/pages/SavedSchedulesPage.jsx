import React, { Component } from 'react';
import ToolBar from '../SavedScheduleComponents/ToolBar'
import ScheduleList from '../SavedScheduleComponents/ScheduleList'



class SavedSchedulesPage extends Component {
  state = {
    schedules: []
  }
  //Connect to backend to grab API
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }
  // loading messages from the server
    getDataFromAPI = async () => {
  // fetch messagesJson
      const messagesJson = await fetch('http://localhost:3000/schedules')
      let schedules = await messagesJson.json()

      this.setState({
        schedules,
      })
    }

  render() {

    return (
      <div>
        <ToolBar/>
        <ScheduleList
          schedules={this.state.schedules}
        />
      </div>
    );
  }
}

export default SavedSchedulesPage;
