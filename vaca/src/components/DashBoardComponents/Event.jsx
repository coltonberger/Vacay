import React, { Component } from 'react';
import '../../App.css';

class Event extends Component {
  render() {

    return (
      <div class="">
        <div class="">
            <div class="hovereffect">
                <img class="img-responsive ui medium image" src={this.props.event.eventImage} />
                <div class="overlay">
                   <h2>{this.props.event.eventName}</h2>
                   <a class="info" href={this.props.event.eventWebsite}>
                   Find out more <br/>
                   Starting at ${this.props.event.eventPrice}
                   </a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Event;
