import React from "react";
import { Link } from "react-router";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
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
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}
