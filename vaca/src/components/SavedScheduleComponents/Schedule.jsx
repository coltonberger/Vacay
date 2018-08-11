import React, { Component } from 'react'
//import '../../App.css'

class Schedule extends Component {
  render () {
    return (



      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">{this.props.savedEvent.eventName}</div>
            <div class="meta">{this.props.savedEvent.eventCity}</div>
            <div class="description">
              {this.props.savedEvent.eventDescription}
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Schedule
