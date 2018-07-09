import React from "react";

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilter from "./LinksListFilter";

// Stateless React Component
export default () => {
  return (
    <div>
      <PrivateHeader title="My new Links" />
      <LinksListFilter />
      <LinksList />
      <AddLink />
    </div>
  );
};
