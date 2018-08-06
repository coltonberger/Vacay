import React, { Component } from 'react';
import '../../App.css';

class Schedule extends Component {
  render() {
    return (
      <div className="ui bottom fixed menu">



      <table class="ui celled table">
        <thead>
        <thead>
          <tr><th>
            Your Schedule
          </th>
        </tr></thead>
          <tr>
            <th>8am</th>
            <th>9am</th>
            <th>10am</th>
            <th>11am</th>
            <th>12pm</th>
            <th>1pm</th>
            <th>2pm</th>
            <th>3pm</th>
            <th>4pm</th>
            <th>5pm</th>
            <th>6pm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
            <td>place event here</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default Schedule;
