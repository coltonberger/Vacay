import React, { Component } from 'react'
import '../../App.css'

class Schedule extends Component {
  render () {
    return (
      <div className='ui bottom fixed menu'>
        <table className='ui celled table'>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>Events go here</td>

              {this.props.scheduledEvents.map((event, index) => (
                <td key={index}>
                {event} <input type="button" value="remove" onClick={(event) => this.props.deleteSingleEvent(index)}/>
                </td>
              ))}
              <td><input type="button" value="clear" onClick={() => this.props.deleteAllEvents()}/></td>
              <td><input type="button" value="save" onClick={this.props.saveSchedule}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Schedule
