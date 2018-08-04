import React, { Component } from 'react'
import Event from './Event'
//grabbing state and now have access to it. USE PROPS

const EventList = props => {
  //console.log("printing from eventlist", props.events)
  return props.events.map(event =>
    <Event
    event={event}
    />
  )
}

export default EventList;
