import React from "react";

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";

// Stateless React Component
export default () => {
  return (
    <div>
      <PrivateHeader title="My new Links" />
      <LinksList />
      <AddLink />
    </div>
  );
};
