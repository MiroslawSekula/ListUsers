import React, {Component} from 'react';
import axios from 'axios';


const BASE_URL = 'http://195.181.210.249:3000/todo/';



class GetAxios extends Component {
  
  state = {
    listUsers: []
  }
  
  componentDidMount() {
    axios.get(BASE_URL)
        .then(res => {
          const listUsers = res.data;
          this.setState({ listUsers });
          console.log(res.data);
        })
  }

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
