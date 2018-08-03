import React, { Component } from 'react';
import ToolBar from './components/ToolBar'
import EventList from './components/EventList'
import Schedule from './components/Schedule'

import './App.css';

class App extends Component {
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
      <div className="App">

        <ToolBar />
        <EventList events={events}/>
        <Schedule />

      </div>
    );
  }
}

export default App;
