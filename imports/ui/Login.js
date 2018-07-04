import { Meteor } from "meteor/meteor";
import React from "react";
import { Link } from "react-router";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, err => {
      console.log("login callback", err);
    });
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/signup">
          <p>link to Signup</p>
        </Link>
        <Link to="/">
          <p>link to Home</p>
        </Link>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name=" email" placeholder="Email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
