import React, { Component } from 'react';
import ToolBar from '../SavedScheduleComponents/ToolBar'
import ScheduleList from '../SavedScheduleComponents/ScheduleList'
import { deleteSingleEvent } from '../../services/api'



class SavedSchedulesPage extends Component {
  state = {
      savedEvents: []
    }

    componentDidMount = async () => {
      await this.getDataFromAPI()
    }

    getDataFromAPI = async () => {
      if (sessionStorage.getItem('user')) {
        const userId= JSON.parse(sessionStorage.getItem('user')).data.id
        const messagesJson = await fetch(`http://localhost:3000/schedules/${userId}`)
        let savedEvents = await messagesJson.json()

        this.setState({
          savedEvents,
        })
      }
    }

    deleteSingleSavedEvent = async (eventId, scheduleId) => {
      await deleteSingleEvent(eventId, scheduleId);


      this.setState({
        savedEvents: this.state.savedEvents.filter((item, index) => {
          return (item.id !== eventId);
        })
      })
    }


  render() {

    return (
      <div>
        <ToolBar/>
        <ScheduleList
          savedEvents={this.state.savedEvents}
          deleteSingleSavedEvent={this.deleteSingleSavedEvent}
        />
      </div>
    );
  }
}

export default SavedSchedulesPage;
