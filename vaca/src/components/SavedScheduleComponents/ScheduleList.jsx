import React, { Component } from 'react'
import Schedule from './Schedule'
// grabbing state and now have access to it. USE PROPS

const ScheduleList = props => {
  // console.log("printing from eventlist", props.events)
  return props.schedules.map(schedule =>
    <Schedule
      key={schedule.id}
      schedule={schedule}
    />
  )
}

export default ScheduleList
