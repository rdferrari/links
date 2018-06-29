import React from "react";
import { Link } from "react-router";

import PropsConcept from "./PropsConcept";

export default class Home extends React.Component {
  render() {
    // Define the varible inside the render method!
    let propsDynamic = "This is the dynamic concept with a variable!";

    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">
          <p>link to Login</p>
        </Link>
        <Link to="/signup">
          <p>link to Signup</p>
        </Link>
        <PropsConcept concept="This is the props concept. Check the PropsConcept.js to refresh the this.props.concept" />
        <PropsConcept concept={propsDynamic} />
      </div>
    );
  }
}
