import React, { Component } from 'react';

class Event extends Component {
  render() {

    return (
      <div className='ui items'>
        <div className='item'>
          <div className='ui medium image'>
            <img src={this.props.event.eventImage}/>
          </div>
          <div className='content'>
            <a className='header'>{this.props.event.eventName}</a>
            <div className='meta'>{this.props.event.eventDescription}</div>
            <div className='description'>
              <img src='' className='ui image' />
            </div>
            <div className='extra'>
              Price ${this.props.event.eventPrice},
              Location: {this.props.event.eventCity}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
