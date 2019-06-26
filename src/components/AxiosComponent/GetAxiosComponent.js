import React, {Component} from 'react';
import axios from 'axios';


const BASE_URL = 'http://195.181.210.249:3000/todo/';



class GetAxios extends Component {
  
  state = {
    listUsers: [],
    loading: false
        
  };

  componentDidMount = () => {
      this.setState({loading: false});
        this.LoadServer();
  }

  LoadServer = () =>{
    this.setState({loading: false});
        axios.get(BASE_URL)
        .then(res => {
          this.setState({ ...res.data, loading: false });
          const listUsers = res.data;
          this.setState({ listUsers});
     });
  };

  render(){
    return(
        <tbody id = "arrayUsers">
        {this.state.listUsers.map(user => 
        <tr>
        <td>{user.author}</td>
        <td>{user.title}</td>
        <td>{user.extra}</td>
        <td>{user.description}</td>
        </tr>
        )}
      </tbody>
       
    )
  }

 
}


export default GetAxios;
