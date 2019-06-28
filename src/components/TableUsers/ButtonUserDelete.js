import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const ButtonUserDelete = ({ deleteUser }) => {
  return (
    <Button primary onClick={deleteUser} className="buttonDelete">
      remove
    </Button>
  );
};
ButtonUserDelete.propTypes = {
  deleteUser: PropTypes.func
};
ButtonUserDelete.defaultProps = {};

export default ButtonUserDelete;
