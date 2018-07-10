import React from "react";
import { Accounts } from "meteor/accounts-base";
// import PropTypes from "prop-types";

// Stateless React Component with props.
// Attetion in the export structure and NO this
const PrivateHeader = props => {
  return (
    <div className="private-header">
      <div className="private-header__content">
        <h1 className="private-header__title">{props.title}</h1>
        <button
          className="button button--link-text"
          onClick={() => Accounts.logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// PrivateHeader.propTypes = {
//   title: PropTypes.string.isRequire
// };

export default PrivateHeader;
