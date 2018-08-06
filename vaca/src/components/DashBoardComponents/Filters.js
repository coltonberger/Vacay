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

      <select className="ui dropdown" id="filterStartTime">
        <option className="disabled">Start of Day</option>
        <option value="">6am</option>
        <option value="1">7am</option>
        <option value="2">8am</option>
        <option value="3">9am</option>
        <option value="4">10am</option>
        <option value="5">11am</option>
        <option value="6">12am</option>
        <option value="7">1pm</option>
        <option value="8">2pm</option>
        <option value="9">3pm</option>
        <option value="10">4pm</option>
        <option value="11">5pm</option>
      </select>

      <select className="ui dropdown" id="filterStartTime">
        <option className="disabled">End of Day</option>
        <option value="">12pm</option>
        <option value="1">1pm</option>
        <option value="2">2pm</option>
        <option value="3">3pm</option>
        <option value="4">4pm</option>
        <option value="5">5pm</option>
        <option value="6">6pm</option>
        <option value="7">7pm</option>
        <option value="8">8pm</option>
        <option value="9">9pm</option>
        <option value="10">10pm</option>
        <option value="11">11pm</option>
        <option value="12">12am</option>
      </select>

      </div>
    );
}

export default Filters;
