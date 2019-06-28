import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => {
  return <input type="checkbox" {...props} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  loadEditUsersCheck: PropTypes.func
};
Checkbox.defaultProps = {};

export default Checkbox;
