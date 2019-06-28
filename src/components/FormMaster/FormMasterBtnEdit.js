import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const FormMasterBtnEdit = ({ saveToServerListTr }) => {
  return (
    <Button primary onClick={saveToServerListTr}>
      empty
    </Button>
  );
};
FormMasterBtnEdit.propTypes = {
  saveToServerListTr: PropTypes.func
};
FormMasterBtnEdit.defaultProps = {};

export default FormMasterBtnEdit;
