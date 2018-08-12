import React, { Component } from 'react'
import '../../App.css'

class Schedule extends Component {
  render () {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">


            <div className="div1">{this.props.savedEvent.eventName}</div>
            <div className="div2"><i type="button" value="remove" className="fa fa-window-close" aria-hidden="true"
            /></div>


            </div>
            <div className="meta"></div>
            <div className="description">
              {this.props.savedEvent.eventDescription}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Schedule
