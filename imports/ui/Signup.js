import React from "react";
import { Link } from "react-router";
import { Accounts } from "meteor/accounts-base";

export default class Signup extends React.Component {
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

    Accounts.createUser({ email, password }, err => {
      console.log("SignUo callback", err);
    });

    // this.setState({
    //   error: "Something went wrong!"
    // });
  }
  render() {
    return (
      <div>
        <p>Signup</p>
        <Link to="/login">
          <p>link to Login</p>
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
          <button>Create Account</button>
        </form>
      </div>
    );
  }
}
