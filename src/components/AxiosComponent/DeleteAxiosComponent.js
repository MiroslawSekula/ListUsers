import React, { Component } from 'react';
import axios from 'axios';


const BASE_URL = 'http://195.181.210.249:3000/todo/';

class DeleteAxios extends Component {

delete(e) {
	e.preventDefault();
	axios.delete(BASE_URL)
	.then(res => console.log(res.data));
}
}
 
export default DeleteAxios; 
