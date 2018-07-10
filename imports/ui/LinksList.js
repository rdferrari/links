import React from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";

import { Links } from "../api/links";
import LinksListItem from "./LinksListItem";

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
      const myLinks = Links.find({
        visible: Session.get("showVisible")
      }).fetch();
      this.setState({ myLinks });
    });
  }

  componentWillUnmount() {
    console.log("Unmount");
    this.linksTracker.stop();
  }

  renderLinksListItens() {
    if (this.state.myLinks.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Links found</p>
        </div>
      );
    }
    return this.state.myLinks.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
      // return <p key={link._id}>{link.url}</p>;
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>{this.renderLinksListItens()}</div>
        </div>
      </div>
    );
  }
}
