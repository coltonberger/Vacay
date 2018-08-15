import React, { Component } from 'react';
import ToolBar from '../DashBoardComponents/ToolBar'
import Filters from '../DashBoardComponents/Filters'
import EventList from '../DashBoardComponents/EventList';
import Schedule from '../DashBoardComponents/Schedule';
import { getEvents, isLoggedIn, createSchedule } from '../../services/api'


class DashBoardPage extends Component {
  state = {
    events: [],
    filteredEvents: [],
    locations: [],
    selected: '',
    priceFilter: '',
    cityFilter: '',
    scheduledEvents: []
  }

//Connect to backend to grab API
  componentDidMount = async () => {
    if (!isLoggedIn()){
      this.props.history.push('/')
    }
    await this.getDataFromAPI()

    window.sessionStorage.removeItem('schedule')
  }
// loading messages from the server
  getDataFromAPI = async () => {
// fetch messagesJson
    const events = await getEvents()
    let locations = events.map(event => event.eventCity)
    locations = [...new Set(locations)]
    this.setState({
      events,
      locations,
    })
  }

//FILTER CHANGES
filter = () => {
    console.log('this.state', this.state);
    //console.info(this)
    let filteredEvents = []

    if(this.state.priceFilter === '1') {
      filteredEvents = this.state.events.filter( event => event.eventPrice < 20);
    } else if (this.state.priceFilter === '2') {
      filteredEvents = this.state.events.filter( event => (event.eventPrice > 20) && (event.eventPrice < 40));
    } else if (this.state.priceFilter === '3') {
      filteredEvents = this.state.events.filter( event => event.eventPrice > 40);
    } else {
      filteredEvents = this.state.events;
    }

    if(this.state.cityFilter !== '') {
      filteredEvents = filteredEvents.filter(event => event.eventCity === this.state.cityFilter);
      console.log('filteredEvents', filteredEvents);
    }

    return filteredEvents;

  }

  selectPriceFilter = (item) => {
      const priceFilter = item.target.value
      //console.log('item.target.value', item.target.value);
      //console.info(this)
      this.setState({ priceFilter })
    }


selectCityFilter = (item) => {
  console.log('item.target.value', item.target.value);
  const cityFilter = item.target.value;
  //console.info(this);
  //console.log('selectCityFilter filteredEvents', filteredEvents)
  this.setState({ cityFilter })

 }

scheduleEvent = event => {
  this.setState({ scheduledEvents: [...this.state.scheduledEvents, event]})
}

deleteSingleEvent = event => {
  this.setState({
    scheduledEvents:this.state.scheduledEvents.filter((item, index) => {
      return (index !== event);
    })
  })
}

deleteAllEvents = event => {
  this.setState({scheduledEvents: []})
}

saveSchedule = () => {
  sessionStorage.setItem('schedule', JSON.stringify(this.state.scheduledEvents))
  createSchedule(this.state.scheduledEvents)
    .then(results => console.log(results))
    //clear form
    .then(this.setState({
      scheduledEvents: []
  }))
}

  render() {
    const {events, selected, selectedPrice, filteredEvents} = this.state;
    //console.log('filteredEvents', filteredEvents);
    //console.log('events', events);
    //console.log('selected', selected);

    const style = {
      margin: 50,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }

    return (
      <div>
        <ToolBar
          history={this.props.history}
        />

        <Filters
          selectPriceFilter={this.selectPriceFilter}
          selectCityFilter={this.selectCityFilter}
          locations={this.state.locations}
        />

        <div style = { style }>
        <EventList
          events={this.filter()}
          filterPrices={this.state.filterPrices}
          filterCities={this.state.filterCities}
          scheduleEvent={this.scheduleEvent}
        />
        </div>

        <Schedule
          scheduledEvents={this.state.scheduledEvents}
          deleteSingleEvent={this.deleteSingleEvent}
          deleteAllEvents={this.deleteAllEvents}
          saveSchedule={this.saveSchedule}
          />

      </div>
    );
  }
}

export default DashBoardPage;
