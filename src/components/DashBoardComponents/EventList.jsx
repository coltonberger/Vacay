import React from 'react'
import Event from './Event'

const EventList = props => {
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
