import React, { Component } from 'react';
import axios from 'axios';


const BASE_URL = 'http://195.181.210.249:3000/todo/{this.state.id}';

class DeleteAxios extends Component {

	state = {
		id: '',
	  }
	
	  handleChange = event => {
		this.setState({ id: event.target.value });
	  }
	 
	  handleSubmit = event => {
		event.preventDefault();
	  
		axios.delete(BASE_URL)
        .then(res => {
	    console.log(res);
        console.log(res.data);
      })
  
	  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
} 
	 
	 
	 
	 
	//   handleSubmit = event => {
	// 	event.preventDefault();
	
	// 	axios.delete(`BASE_URL, {this.state.id}`)
	// 	  .then(res => {
	// 		console.log(res);
	// 		console.log(res.data);
	// 	  })
	//   }



// delete(e) {
// 	e.preventDefault();
// 	axios.delete(BASE_URL)
// 	.then(res => console.log(res.data));
// }
// }
 
export default DeleteAxios; 
