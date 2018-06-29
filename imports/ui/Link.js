import React from "react";

export default class Link extends React.Component {
  onLogout() {
    browserHistory.push("/");
  }
  render() {
    return (
      <div>
        <h1>Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
