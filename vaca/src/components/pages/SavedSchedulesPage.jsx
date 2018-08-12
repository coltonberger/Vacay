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
      //console.log("sessionStorage.getItem('user'): ", sessionStorage.getItem('user'));
      if (sessionStorage.getItem('user')) {
        const userId= JSON.parse(sessionStorage.getItem('user')).data.id
        const messagesJson = await fetch(`http://localhost:3000/schedules/${userId}`)
        let savedEvents = await messagesJson.json()
        //console.log('savedEvents', savedEvents)

        this.setState({
          savedEvents,
        })
      }
    }

    deleteSingleSavedEvent = event => {
      this.setState({
        savedEvents: this.state.savedEvents.filter((item, index) => {
          return (index !== event);
          console.log("state ===>", this.state)
        })
      })
    }


  render() {

    return (
      <div>
        <ToolBar/>
        <ScheduleList
          savedEvents={this.state.savedEvents}
          deleteSingleSavedEvent={this.state.deleteSingleSavedEvent}
        />
      </div>
    );
  }
}

export default SavedSchedulesPage;
