import React, { Component } from 'react'
//import '../../App.css'

class Schedule extends Component {
  render () {
    return (
      <div className="ui divided items">
        <div className="item">
          <div className="middle aligned content">
            {this.props.savedEvent.eventName}
          </div>
        </div>
      </div>
    )
  }
}

export default Schedule
