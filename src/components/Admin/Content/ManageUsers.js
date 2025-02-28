import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TableUser from "./TableUser";
function ManageUsers(props) {
  const [shoModalCreateUser, setShoModalCreateUser] = useState(false);
  return (
    <div className="manage-users-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShoModalCreateUser(true)}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
            Add New Users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser /> 
        </div>
      </div>
      <ModalCreateUser
        show={shoModalCreateUser}
        setShow={setShoModalCreateUser}
      />
    </div>
  );
}

export default ManageUsers;
