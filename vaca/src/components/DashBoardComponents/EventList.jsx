import React, { Component } from 'react'
import Event from './Event'
// grabbing state and now have access to it. USE PROPS

const EventList = props => {
  // console.log("printing from eventlist", props.events)
  return props.events.map(event =>
    <Event
      key={event.id}
      event={event}
      filterPrices={props.filterPrices}
      filterCities={props.filterCities}
      scheduleEvent={props.scheduleEvent}
    />
  )
}

export default EventList
