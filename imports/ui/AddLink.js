import React from "react";
import { Meteor } from "meteor/meteor";

import { Links } from "../api/links";

export default class AddLink extends React.Component {
  onSubmit(e) {
    // this get the valuer from the input
    const url = this.refs.url.value.trim();
    // the trim clean the spaces of the input

    e.preventDefault();
    // if there is a url imput
    if (url) {
      Meteor.call("links.insert", url);
      // insert the url value
      // Links.insert({ url, userId: Meteor.userId() });
      // then clear the value
      this.refs.url.value = "";
    }
  }
  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
