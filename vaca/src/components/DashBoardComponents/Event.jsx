import React, { Component } from 'react'
import '../../App.css'

class Event extends Component {
  render () {
    return (
      <div className=''>
        <div className='hovereffect'>
          <img className='img-responsive ui medium image' src={this.props.event.eventImage} />
          <div className='overlay'>
            <h2>{this.props.event.eventName}</h2>
            <a className='info' href={this.props.event.eventWebsite}>
                 Discover
            </a>
            <a className='info' onClick={() => this.props.scheduleEvent(this.props.event.eventName)}>
                 Add
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Event
