import React from 'react'
import '../../App.css'

const Filters = ({ locations, selectCityFilter, selectPriceFilter }) => {
  return (
    <div className='filters'>
      <div id="header">
        <div> <strong>vā kā</strong></div><br/>
        <div>start saving events, to live like a local</div>
      </div>

      <div className='filteredOptions'>
      <div class='default text' role='alert' aria-live='polite'>
        City &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Price per activity
      </div>
        <select className="mini ui dropdown light-grey button" id='filterLocation' onChange={selectCityFilter}>
          <option value='all'>All</option>
            {locations.map(location => <option key={location} value={location}>{location}</option>)}
        </select>

        <select className='mini ui dropdown light-grey button' id='filterPrice' onChange={selectPriceFilter}>
          <option value=''>All</option>
          <option value='1'> Less than $20</option>
          <option value='2'>$20-$40</option>
          <option value='3'>Greater than $40</option>
        </select>
      </div>



    </div>
  )
}

export default Filters
