import React from "react";
import PropTypes from "prop-types";
import ButtonUserDelete from "./ButtonUserDelete";
import Checkbox from "./Checkbox";
import { AppContext } from "../../App";
import "./Table.css";

const Table = ({ addListUsers, id, done }) => (
  <AppContext.Consumer>
    {({ RemoveTrKeyList, loadEditUsersCheck }) => (
      <div className="tableStyle">
        <table className="table costomTable" id="costomTable">
          <thead>
            <tr className="costomTableHead">
              <th>Edit</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Tel</th>
            </tr>
          </thead>

          <tbody>
            {addListUsers.map(user => (
              <tr listid={id} key={user.id}>
                <Checkbox
                  type="checkbox"
                  onChange={() => loadEditUsersCheck(id, user.id)}
                  checked={done}
                />
                <td>{user.author}</td>
                <td>{user.title}</td>
                <td>{user.extra}</td>
                <td>{user.description}</td>
                <ButtonUserDelete
                  deleteUser={() => RemoveTrKeyList(id, user.id)}
                >
                  remove
                </ButtonUserDelete>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </AppContext.Consumer>
);

Table.propsType = {
  addListUsers: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      extra: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string
    })
  ),
  listUser: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  done: PropTypes.bool
};
Table.defaultProps = {};
export default Table;
