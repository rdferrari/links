import React from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Links } from "../api/links";

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLinks: []
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe("myLinks-pub");
      const myLinks = Links.find().fetch();
      this.setState({ myLinks });
    });
  }

  componentWillUnmount() {
    console.log("Unmount");
    this.linksTracker.stop();
  }

  renderLinksListItens() {
    return this.state.myLinks.map(link => {
      return <p key={link._id}>{link.url}</p>;
    });
  }

  render() {
    return (
      <div>
        <p>LinkList</p>
        <div>{this.renderLinksListItens()}</div>
      </div>
    );
  }
}
