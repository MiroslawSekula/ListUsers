import React from 'react';
import './ContNav.css';
import Newsletter from '../FormMaster/FormMasterServ';
import FormMasterBtnRefresh from '../FormMaster/FormMasterBtnRefresh';
import FormMasterBtnCleanTheWindow from '../FormMaster/FormMasterBtnCleanTheWindow';
import FormMasterBtnSaveInput from '../FormMaster/FormMasterBtnSaveInput';
import FormMasterBtnEdit from '../FormMaster/FormMasterBtnEdit';
import FormMasterBtnListUsers from '../FormMaster/FormMasterBtn_List_Users'



const ContainerNav = () => {
    return(
        <nav className="navbarCustom">
        <div id ="input-style">
                <Newsletter/>
            </div>
            <div id="btn-style">
              <FormMasterBtnRefresh/>
              <FormMasterBtnCleanTheWindow/>
              <FormMasterBtnSaveInput/>
              <FormMasterBtnEdit/>
              <FormMasterBtnListUsers/>
            </div>
        </nav>
        );
}


export default ContainerNav;
