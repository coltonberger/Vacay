import React from 'react';

const Filters = (props) => {

    return (
      <div className="filters" on>
      <select className="ui dropdown">
        <option className="disabled">Choose City</option>
        <option value="1">San Francisco</option>
        <option value="0">New York</option>
        <option value="0">Los Angeles</option>
      </select>
      <select className="ui dropdown" onChange={() => props.priceFilterChange()}>
        <option className="disabled">Choose price/activity</option>
        <option value="1"> less than $20</option>
        <option value="0">$20-$40</option>
        <option value="0">greater than $40</option>
      </select>
      </div>
    );
}

export default Filters;
