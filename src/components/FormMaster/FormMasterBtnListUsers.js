import React from "react";
import PropTypes from 'prop-types';
import {Button } from 'semantic-ui-react';


const FormMasterBtnListUsers = ({onLoadDataUsers}) => {

   


      return (
<Button primary onClick = {onLoadDataUsers} >load user list </Button> 
    )  
}
FormMasterBtnListUsers.propTypes ={
    onLoadDataUsers: PropTypes.func
};
FormMasterBtnListUsers.defaultProps = {}


export default FormMasterBtnListUsers;