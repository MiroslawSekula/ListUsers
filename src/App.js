import React, { Component } from "react";
import "./App.css";
import "react-bootstrap";
import axios from "axios";
import { findIndex } from "lodash";
import shortid from "shortid";
import FormUSerAdd from "./components/FormMaster/FormMasterInputUsers";
import BtnLoadListUsers from "./components/FormMaster/BtnLoadListUsers";
import FormMasterBtnCleanTheWindow from "./components/FormMaster/FormMasterBtnCleanTheWindow";
import FormMasterBtnSaveInput from "./components/FormMaster/FormMasterBtnSaveInput";
import FormMasterBtnEdit from "./components/FormMaster/FormMasterBtnEdit";
import FormMasterBtnRefresh from "./components/FormMaster/FormMasterBtnRefresh";
import Table from "./components/TableUsers/Table";

const BASE_URL = "http://127.0.0.1:3000/todo/";
export const AppContext = React.createContext({});

class App extends Component {
  state = {
    listUsers: [],
    listKeyEdit: "",
    listEditUsers: []
  };

  AddTrList = props => {
    const trListKey = this.state.listUsers;
    const addIdTrList = {
      id: shortid.generate(),
      author: props.author,
      description: props.description,
      title: props.title,
      extra: props.extra
    };
    this.setState(
      {
        listUsers: [...trListKey, addIdTrList]
      },
      this.saveToServer
    );
  };

  EditTrList = value => {
    const trListKey = this.state.listUsers;
    const index = findIndex(trListKey, ["id", this.state.listKeyEdit]);
    const inputValue = {
      id: this.state.listKeyEdit,
      author: value.author,
      description: value.description,
      title: value.title,
      extra: value.extra
    };
    if (index !== -1) {
      trListKey[index] = inputValue;

      this.setState(
        {
          listUsers: trListKey
        },
        this.saveToServer
      );
    }
  };

  EditTrListChecked = (list, listUser) => {
    const trListKey = this.state[list];
    const index = findIndex(trListKey, ["id", listUser]);

    if (index !== -1) {
      this.setState({
        listKeyEdit: trListKey[index].id
      });
    }
  };

  RemoveTrKey = (list, listUser) => {
    const trListKey = this.state[list];
    const index = findIndex(trListKey, ["id", listUser]);
    if (index !== -1) {
      trListKey.splice(index, 1);
      this.setState(
        {
          [list]: trListKey
        },
        this.saveToServer
      );
    }
  };

  LoadServer = () => {
    axios.get(BASE_URL).then(res => {
      this.setState({ ...res.data });
    });
  };

  saveToServer = () => {
    axios.post(BASE_URL, { listUsers: this.state.listUsers });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          RemoveTrKeyList: this.RemoveTrKey,
          saveUsertList: this.AddTrList,
          editUsertList: this.EditTrList,
          loadEditUsersCheck: this.EditTrListChecked
        }}
      >
        <div className="header">
          <nav className="navbarCustom">
            <div id="input-style">
              <FormUSerAdd />
            </div>
            <div id="btn-style">
              <FormMasterBtnRefresh />
              <FormMasterBtnCleanTheWindow />
              <FormMasterBtnSaveInput />
              <FormMasterBtnEdit />
              <BtnLoadListUsers onLoadDataUsers={this.LoadServer} />
            </div>
          </nav>
          {/* Section ContainerP */}
          <div id="containerFlex" className="container">
            <div id="contPresentation">
              <Table addListUsers={this.state.listUsers} id="listUsers" />
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
