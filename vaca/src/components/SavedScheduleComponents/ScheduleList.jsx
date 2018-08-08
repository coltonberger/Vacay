import React, { Component } from 'react'
import Schedule from './Schedule'
// grabbing state and now have access to it. USE PROPS

const ScheduleList = props => {
  // console.log("printing from eventlist", props.events)
  return (
    <Schedule/>
  )
}

export default ScheduleList
