import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpPage extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastname: '',
            email: '',
            password: '',
            hasAgreed: false
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
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"></label>
                <input type="text" id="firstName" className="FormField__Input" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"></label>
                <input type="text" id="lastName" className="FormField__Input" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email"></label>
                <input type="email" id="email" className="FormField__Input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password"></label>
                <input type="password" id="password" className="FormField__Input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
      }
    }

export default SignUpPage;
