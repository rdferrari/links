import React from "react";
import { Meteor } from "meteor/meteor";

import { Links } from "../api/links";

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  onSubmit(e) {
    // this get the valuer from the input
    // const url = this.refs.url.value.trim();
    // the trim clean the spaces of the input
    const { url } = this.state;

    e.preventDefault();
    // if there is a url imput
    if (url) {
      Meteor.call("links.insert", url, (err, res) => {
        if (!err) {
          this.setState({ url: "" });
        }
      });
      // insert the url value
      // Links.insert({ url, userId: Meteor.userId() });
      // then clear the value
    }
  }
  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }
  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange.bind(this)}
          />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
