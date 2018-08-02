import React, { Component } from 'react';
import ToolBar from './components/ToolBar'
import EventList from './components/EventList'
import Schedule from './components/Schedule'

import './App.css';

class App extends Component {
  state = {
    events: []
    // events: [
    //   {id: 1, eventName: "test1", eventDescription: "Testing 123", eventPrice: 22, eventTime: 60},
    //   {id: 2, eventName: "test2", eventDescription: "Testing 123", eventPrice: 120, eventTime: 120},
    //   {id: 3, eventName: "test3", eventDescription: "Testing 123", eventPrice: 0, eventTime: 180}
    // ]
  }

  // React API
      componentDidMount = async () => {
        await this.getDataFromAPI()

      }
      // loading messages from the server
      getDataFromAPI = async () => {
        // fetch messagesJson
        const messagesJson = await fetch('http://localhost:3000/events')
        let events = await messagesJson.json()
        console.log('coming from API === ', events)
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
