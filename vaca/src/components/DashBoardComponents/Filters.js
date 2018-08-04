import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
      <select class="ui dropdown">
        <option class="disabled">Choose City</option>
        <option value="1">San Francisco</option>
        <option value="0">New York</option>
        <option value="0">Los Angeles</option>
      </select>
      <select class="ui dropdown">
        <option class="disabled">Price per activity</option>
        <option value="1"> less than $20</option>
        <option value="0">$20-$40</option>
        <option value="0">greater than $40</option>
      </select>
      <div class="ui animated button">
        <div class="visible content">Search</div>
        <div class="hidden content">
          <i class="right arrow icon"></i>
        </div>
      </div>
      </div>
    );
  }
}

export default Filters;
