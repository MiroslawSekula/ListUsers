import React from 'react';
import PropTypes from 'prop-types';
import ButtonUserDelete from './ButtonUserDelete'
import { AppContext } from "../../App";

const Table = ({addListUsers,id,}) => (

      <AppContext.Consumer>    
     {({ RemoveTrKeyList }) => (
    

<div className="tableStyle">
<table className="table costomTable" id="costomTable">
<thead>
  <tr className="costomTableHead">
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>tel</th>
  </tr>
</thead>

<tbody>
{addListUsers.map(user => 
<tr listId = {id} key= {user.id}>
<td>{user.author}</td>
<td>{user.title}</td>
<td>{user.extra}</td>
<td>{user.description}</td>
<ButtonUserDelete deleteUser={() => RemoveTrKeyList(id, user.id) }  >remove</ButtonUserDelete>
</tr>
)}
</tbody>             
</table>
</div>

     )}
     </AppContext.Consumer>
);


Table.propsType = {
    addListUsers : PropTypes.arrayOf(
        PropTypes.shape({
         author: PropTypes.string,
         title: PropTypes.string,
         extra: PropTypes.string,
         description: PropTypes.string,
         id: PropTypes.string
        })
        ),
    listUser : PropTypes.string,
    id: PropTypes.string,
    key: PropTypes.string
}
Table.defaultProps = {}
export default Table