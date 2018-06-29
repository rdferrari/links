import React from "react";
import { Link } from "react-router";

export default class Login extends React.Component {
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
      </div>
    );
  }
}
