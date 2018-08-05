import React from 'react';

const Filters = ({ locations, selectCityFilter, selectPriceFilter }) => {

    return (
      <div className="filters">
      <select className="ui dropdown" id="filterLocation" onChange={selectCityFilter}>
        <option className="disabled">Choose City</option>
        {locations.map(location => <option value={location}>{location}</option>)}
      </select>
      <select className="ui dropdown" id="filterPrice" onChange={selectPriceFilter}>
        <option className="disabled">Choose price/activity</option>
        <option value="">All</option>
        <option value="1"> Less than $20</option>
        <option value="2">$20-$40</option>
        <option value="3">Greater than $40</option>
      </select>
      </div>
    );
}

export default Filters;
