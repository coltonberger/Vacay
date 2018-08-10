import React from 'react'
import Schedule from './Schedule'
// grabbing state and now have access to it. USE PROPS

const ScheduleList = props => {
  // console.log("printing from eventlist", props.events)
  return props.savedEvents.map(savedEvent =>
    <Schedule
      key={savedEvent.id}
      savedEvent={savedEvent}
    />
  )
}

export default ScheduleList
