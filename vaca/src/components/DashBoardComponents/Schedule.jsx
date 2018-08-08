import React, { Component } from 'react'
import '../../App.css'

class Schedule extends Component {
  render () {
    return (
      <div className='ui bottom fixed menu'>
        <table class='ui celled table'>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>Events go here</td>
              {this.props.scheduledEvents.map(event => (
                <tr>
                {event}
                </tr>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Schedule
