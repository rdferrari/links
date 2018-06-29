import React from "react";
import { Link } from "react-router";

export default class Signup extends React.Component {
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
      </div>
    );
  }
}
