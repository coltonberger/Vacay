import React, { Component } from 'react';
import ToolBar from '../SavedScheduleComponents/ToolBar'
import ScheduleList from '../SavedScheduleComponents/ScheduleList'



class SavedSchedulesPage extends Component {
  state = {
    savedEvents: []
  }
    componentDidMount = async () => {
      await this.getDataFromAPI()
    }
    getDataFromAPI = async () => {
      const messagesJson = await fetch('http://localhost:3000/savedEvents')
      let savedEvents = await messagesJson.json()

      this.setState({
        savedEvents,
      })
    }

  render() {

    return (
      <div>
        <ToolBar/>
        <ScheduleList
          savedEvents={this.state.savedEvents}
        />
      </div>
    );
  }
}

export default SavedSchedulesPage;
