import React, { Component } from 'react';
import { Form, Button, Message, Grid, Header, Segment } from "semantic-ui-react";

class LoginForm extends Component {
  render() {
    return (
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
               Please Signin
            </Header>
            <Form size='large' onSubmit={this.handleSubmit} onSubmit={this.handleSubmit}>
              <Segment stacked></Segment>
                <label className="FormField__Label" htmlFor="email"></label>
                <Form.Input
                fluid icon='envelope'
                iconPosition='left'
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                value={this.state.email}
                onChange={this.handleChange}
                required/>
                <Segment stacked></Segment>
                <label className="FormField__Label" htmlFor="password"></label>
                <Form.Input
                  fluid
                  icon='lock'
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  iconPosition='left'
                  minLength="4"
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
              <a href='/signup'>New Here? Create Account</a>
            </Message>
            
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
