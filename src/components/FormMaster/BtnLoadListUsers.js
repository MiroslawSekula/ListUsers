import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const BtnLoadListUsers = ({ onLoadDataUsers }) => {
  return (
    <Button primary onClick={onLoadDataUsers}>
      {" "}
      load the users{" "}
    </Button>
  );
};
BtnLoadListUsers.propTypes = {
  onLoadDataUsers: PropTypes.func
};
BtnLoadListUsers.defaultProps = {};

export default BtnLoadListUsers;
