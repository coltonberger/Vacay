import React, { Component } from 'react'
import { Form, Button, Message, Grid, Header, Segment } from 'semantic-ui-react'
import { login } from '../../services/api'
import '../../App.css'

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
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

    //console.log('The form was submitted with the following data:')
    //console.log(this.state)
    const { email, password } = this.state
    login(email, password)
      .then(() => this.props.history.push('/dashboard'))
  }


  render () {
    return (
      <div className= 'container'>
        <h1 class="centered"></h1>
          <img id='postcard1' src="http://dancingmood.net/wp-content/uploads/2017/05/Free-Blank-Postcard-Template-For-Word-2.jpg" alt="post card one" alt="post card one" />

          <div class="top-left">
          <div>vā kā</div><br/>
          <div>enjoy cities like a local</div>
          </div>

          <div className='bottom-right'>
          <div className='login-form'>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                   Please Sign In
                </Header>
                <Form size='large' onSubmit={this.handleSubmit} onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <label className='FormField__Label' htmlFor='email' />
                    <Form.Input
                      fluid icon='envelope'
                      iconPosition='left'
                      type='email'
                      id='email'
                      className='FormField__Input'
                      placeholder='Enter your email'
                      name='email'
                      pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                      value={this.state.email}
                      onChange={this.handleChange}
                      required />

                    <label className='FormField__Label' htmlFor='password' />
                    <Form.Input
                      fluid
                      icon='lock'
                      type='password'
                      id='password'
                      className='FormField__Input'
                      placeholder='Enter your password'
                      name='password'
                      iconPosition='left'
                      minLength='4'
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />

                    <Button color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>

                <Message>
                  New Here? <a href='/signup'> Create Account</a>
                </Message>

              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
