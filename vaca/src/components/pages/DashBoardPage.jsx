import React, { Component } from 'react';
import ToolBar from '../DashBoardComponents/ToolBar'
import Filters from '../DashBoardComponents/Filters'
import EventList from '../DashBoardComponents/EventList'
import Schedule from '../DashBoardComponents/Schedule'

class DashBoardPage extends Component {
  state = {
    events: [],
    filteredEvents: [],
    locations: [],
    selected: '',
    selectedPrice: ''
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
    let locations = events.map(event => event.eventCity)
    locations = [...new Set(locations)]
    this.setState({
      events,
      locations,
    })
  }

//FILTER CHANGES
selectPriceFilter = (item) => {
  const value = item.target.value
  console.log('item.target.value', item.target.value);
  console.info(this)
  let filteredEvents = []
  if(value === '1') {
    filteredEvents = this.state.events.filter( event => event.eventPrice < 20);
  } else if (value === '2') {
    filteredEvents = this.state.events.filter( event => (event.eventPrice > 20) && (event.eventPrice < 40));
  } else if (value === '3') {
    filteredEvents = this.state.events.filter( event => event.eventPrice > 40);
  }
  this.setState({ filteredEvents, selectedPrice: value})
  }

  selectCityFilter = (item) => {
    console.log('item.target.value', item.target.value);
    const selected = item.target.value;
    console.info(this);
    const filteredEvents = this.state.events.filter( event => event.eventCity === selected);
    this.setState({selected, filteredEvents})

  }



  render() {
    const {events, selected, selectedPrice, filteredEvents} = this.state;

    const style = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }

    return (
      <div>
        <ToolBar />
        <Filters
          selectPriceFilter={this.selectPriceFilter}
          selectCityFilter={this.selectCityFilter}
          locations={this.state.locations}
        />
        <div style = { style }>
        <EventList
          events={(selected !=='') || (selectedPrice !=='') ? filteredEvents : events}
          filterPrices={this.state.filterPrices}
          filterCities={this.state.filterCities}
        />
        </div>
        <Schedule />
      </div>
    );
  }
}

export default DashBoardPage;
