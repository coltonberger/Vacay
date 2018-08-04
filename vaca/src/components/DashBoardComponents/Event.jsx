import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className='ui items'>
        <div className='item'>
          <div className='ui tiny image'>
            <img src='' />
          </div>
          <div className='content'>
            <a className='header'>{event.eventName}</a>
            <div className='meta'>{event.eventDescription}</div>
            <div className='description'>
              <img src='' className='ui image' />
            </div>
            <div className='extra'>
              Price {event.eventPrice},
              Time {event.eventPrice}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
