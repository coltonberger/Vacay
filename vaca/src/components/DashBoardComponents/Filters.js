import React from 'react'
import '../../App.css'

const Filters = ({ locations, selectCityFilter, selectPriceFilter }) => {
  return (
    <div className='filters'>
      <h3 className="ui center aligned header">vā kā</h3>
        <div className="slogan">enjoy cities like a local</div>

      <h5>Create your Schedule</h5>
      <select className="ui dropdown button" id='filterLocation' onChange={selectCityFilter}>
        <option className='disabled'>Choose City</option>
          {/*{locations.map(location => <option key={location} value={location}>{location}</option>)}*/}
          <option value=''>All</option>
          <option value='1'>San Francisco</option>
          <option value='2'>New York</option>
          <option value='3'>Los Angeles</option>
      </select>

      <select className='ui dropdown button' id='filterPrice' onChange={selectPriceFilter}>
        <option className='disabled'>Choose price/activity</option>
        <option value=''>All</option>
        <option value='1'> Less than $20</option>
        <option value='2'>$20-$40</option>
        <option value='3'>Greater than $40</option>
      </select>

    </div>
  )
}

export default Filters
