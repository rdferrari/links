import React from "react";
import { Accounts } from "meteor/accounts-base";
// import PropTypes from "prop-types";

// Stateless React Component with props.
// Attetion in the export structure and NO this
const PrivateHeader = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => Accounts.logout()}>Logout</button>
    </div>
  );
};

// PrivateHeader.propTypes = {
//   title: PropTypes.string.isRequire
// };

export default PrivateHeader;
