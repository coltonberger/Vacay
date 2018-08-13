import React, { Component } from 'react'
import { Form, Button, Message, Grid, Header, Segment } from 'semantic-ui-react'
import { signup } from '../../services/api'
import '../../App.css'

class SignUpPage extends Component {
  constructor () {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    let target = e.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    // console.log('The form was submitted with the following data as state:');
    // console.log(this.state);
    const { firstName, lastName, email, password } = this.state
    signup({ firstName, lastName, email, password })
      .then(data => console.log('response data:', data))
      //clear form
      .then(this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }))
  }

  render () {
    return (
      <div className= 'container'>
        <div className='login-form'>
          <img id='postcard2' src="https://olddesignshop.com/wp-content/uploads/2017/10/Vintage-Grunge-Postcard-Back-Old-Design-Shop.jpg" />
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <div className='bottom-right2'>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                 Sign up for your account
              </Header>
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>

                  <label className='FormField__Label' htmlFor='name' />
                  <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    placeholder='First Name'
                    type='text'
                    id='firstName'
                    className='FormField__Input'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required />

                  <label className='FormField__Label' htmlFor='name' />
                  <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    type='text' id='lastName'
                    className='FormField__Input'
                    placeholder='Last Name'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required />

                  <label className='FormField__Label' htmlFor='email' />
                  <Form.Input
                    fluid icon='envelope'
                    iconPosition='left'
                    pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                    type='email'
                    id='email'
                    className='FormField__Input'
                    placeholder='E-mail address'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    required />

                  <label className='FormField__Label' htmlFor='password' />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    type='password'
                    minLength='4'
                    type='password'
                    id='password'
                    className='FormField__Input'
                    placeholder='Password'
                    name='password' value={this.state.password}
                    onChange={this.handleChange}
                    required />

                  <Button color='teal' fluid size='large'>
                    Create Account
                  </Button>
                </Segment>
              </Form>
              <Message>
                Verify Account By <a href='/'>Logging In</a>
              </Message>
            </Grid.Column>
          </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpPage
