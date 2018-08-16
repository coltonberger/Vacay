import React from 'react'
import Schedule from './Schedule'

const ScheduleList = props => {
  return props.savedEvents.map(savedEvent =>
    <Schedule
      key={savedEvent.id}
      savedEvent={savedEvent}
      deleteSingleSavedEvent={props.deleteSingleSavedEvent}
    />
  )
}

export default ScheduleList
