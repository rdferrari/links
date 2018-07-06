import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Links = new Mongo.Collection("links");

if (Meteor.isServer) {
  Meteor.publish("myLinks-pub", function() {
    // User ID filter
    return Links.find({ userId: this.userId });
  });
}

Meteor.methods({
  addNumbers(a, b) {
    console.log("addNumbers is running");

    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      throw new Meteor.Error("Not a number", "Number required");
    }
  }
});
