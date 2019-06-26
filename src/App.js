import React, {Component} from 'react';
import './App.css';
import 'react-bootstrap';
import axios from 'axios';
import { findIndex} from "lodash";
import shortid from "shortid";
import FormUSerAdd from './components/FormMaster/FormMasterInputUsers';
import FormMasterBtnListUsers from './components/FormMaster/FormMasterBtnListUsers';
import FormMasterBtnCleanTheWindow from './components/FormMaster/FormMasterBtnCleanTheWindow';
import FormMasterBtnSaveInput from './components/FormMaster/FormMasterBtnSaveInput';
import FormMasterBtnEdit from './components/FormMaster/FormMasterBtnEdit';
import FormMasterBtnRefresh from './components/FormMaster/FormMasterBtnRefresh';
import Table from './components/TableUsers/Table'

// const BASE_URL = 'http://195.181.210.249:3000/todo/';
const BASE_URL = 'http://127.0.0.1:3000/todo/';
export const AppContext = React.createContext({});

class App extends Component {
  
  state = {
    listUsers: [],
    
    };

AddTrList = list => {
    const trListKey = this.state[list];
    console.log(trListKey);
    if (trListKey) {
      const addIdTrList = {
        id: shortid.generate(),
        };
        this.setState(
        {
          [list]: [...trListKey, addIdTrList ]
        },
        this.saveToServer
      );
    }
  };

  RemoveTrKey = (list, listUser)  => {
const trListKey =this.state[list];
const index = findIndex(trListKey, ['id',listUser]);
console.log(trListKey)
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

  LoadServer = () =>{
         axios.get(BASE_URL)
         .then(res => {
          this.setState({...res.data});
         
        });
  };
 
  saveToServer = () => {
       axios.post(BASE_URL,{listUsers: this.state.listUsers})
         
  };
  
  render (){
  return (
    <AppContext.Provider
    value={{
      RemoveTrKeyList: this.RemoveTrKey,
      onChange: this.AddTrList
      }}
    >
  <div className="header" > 
     <nav className="navbarCustom">
        <div id ="input-style">
          <FormUSerAdd  
          FormUSerAdd = {this.state.listUsers}
          id = "listUsers"          
            />
        </div>
          <div id="btn-style">
            <FormMasterBtnRefresh/>
            <FormMasterBtnCleanTheWindow/>
            <FormMasterBtnSaveInput/>
            <FormMasterBtnEdit saveToServerListTr = {this.AddTrList} />
            <FormMasterBtnListUsers onLoadDataUsers = {this.LoadServer}/>
          </div>
     </nav>
{/* Section ContainerP */}
     <div id="containerFlex" className="container">
       <div id="contPresentation">
        <Table
          addListUsers = {this.state.listUsers}
          id = "listUsers"
          />
        </div>
      </div>
    </div>
   </AppContext.Provider>
   );
  };
}




export default App;
