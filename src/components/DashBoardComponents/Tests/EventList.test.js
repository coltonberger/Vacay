import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import EventList from '../EventList'

const events = []
//make sure to enter seeded data

describe('EventList', () => {
  it('renders events', () => {
    const wrapper = shallow(<EventList events={events}/>)
    expect(wrapper.find('Event')).toHaveLength(events.length)
  })
})
