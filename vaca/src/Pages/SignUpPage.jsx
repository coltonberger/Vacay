import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginPage = (props) => (
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
           Signup for your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
            <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Create Account
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href='#'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginPage
