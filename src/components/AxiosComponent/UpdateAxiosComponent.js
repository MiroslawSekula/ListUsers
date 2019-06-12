import React, { Component } from 'react';
import axios from 'axios';



const BASE_URL = 'http://195.181.210.249:3000/todo/';


class UpdateAxios extends Component {


update(e) {
    e.preventDefault();
    const userList = {
        author: this.state.author,
        title: this.state.title,
        extra: this.state.extra,
        description: this.state.description,
    }
    axios.put(BASE_URL, userList)
    .then(res => console.log(res.data));
}
}

export default UpdateAxios;