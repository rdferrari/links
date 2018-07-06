import React from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Links } from "../api/links";
import LinksList from "./LinksList";

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
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
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <LinksList />
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
