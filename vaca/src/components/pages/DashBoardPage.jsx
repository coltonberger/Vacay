import React, { Component } from 'react';
import ToolBar from '../DashBoardComponents/ToolBar'
import EventList from '../DashBoardComponents/EventList'
import Schedule from '../DashBoardComponents/Schedule'

class DashBoardPage extends Component {
  state = {
    events: []
  }

//Connect to backend to grab API
  componentDidMount = async () => {
    await this.getDataFromAPI()
  }
// loading messages from the server
  getDataFromAPI = async () => {
// fetch messagesJson
    const messagesJson = await fetch('http://localhost:3000/events')
    let events = await messagesJson.json()
    this.setState({events})
  }

  render() {
    const {events} = this.state;

    return (
      <div>
        <ToolBar />
        <EventList events={events}/>
        <Schedule />
      </div>
    );
  }
}

export default DashBoardPage;
