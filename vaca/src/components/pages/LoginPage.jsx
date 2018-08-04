import React, { Component } from 'react';
import { Form, Button, Message, Grid, Header, Segment } from "semantic-ui-react";


class LoginPage extends Component {
  constructor() {
    super();
      this.state = {
        email: '',
        password: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
  }

  handleSubmit(e) {
      e.preventDefault();

      console.log('The form was submitted with the following data:');
      console.log(this.state);
  }

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
              <Segment stacked>
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
              <a href='/SignUpPage'>New Here? Create Account</a>
            </Message>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
