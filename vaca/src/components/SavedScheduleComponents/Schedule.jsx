import React, { Component } from 'react'
import '../../App.css'

class Schedule extends Component {
  render () {
    return (
      <div className="ui divided items">
        <div className="item">
          <div className="ui tiny image">
            <img src={this.props.schedule.eventImage}/>
          </div>
          <div className="middle aligned content">
            {this.props.schedule.eventName}
          </div>
        </div>
      </div>
    )
  }
}

export default Schedule
