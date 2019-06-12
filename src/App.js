import React from 'react';
import './App.css';
import 'react-bootstrap';
//import ContainerM from './components/containerMaster/ContainerM';
import ContainerP from './components/containerPresentation/ContainerP';
import ContNav from './components/ContainerNav/ContNav';






function App() {
  return (
  <div className="header" > 
   <ContNav/>
    <div id="containerFlex" className="container">
      <div id="contPresentation">
        <ContainerP/>
         </div>
    </div>
  </div>
 );
}
export default App;
