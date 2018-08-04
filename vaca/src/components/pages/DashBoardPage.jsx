import React, { Component } from 'react';
import ToolBar from '../DashBoardComponents/ToolBar'
import Filters from '../DashBoardComponents/Filters'
import EventList from '../DashBoardComponents/EventList'
import Schedule from '../DashBoardComponents/Schedule'

class DashBoardPage extends Component {
  state = { events: [] }

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

//FILTER CHANGES
priceFilterChange = () => {
    this.setState({
      filterPrices: !this.state.filterPrices
    })
  }

  render() {
    const {events} = this.state;

    return (
      <div>
        <ToolBar />
        <Filters
          priceFilterChange={this.priceFilterChange}
        />
        <EventList
          events={this.state.events}
          filterPrices={this.state.filterPrices}
        />
        <Schedule />
      </div>
    );
  }
}

export default DashBoardPage;
