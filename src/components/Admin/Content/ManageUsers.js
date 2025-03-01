import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

function ManageUsers(props) {
  const [listUsers, setListUsers] = useState([]);
  const [shoModalUpdateUser, setShoModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [shoModalCreateUser, setShoModalCreateUser] = useState(false);

  const handleClickBtnUpdateUser = (user) => {
    setShoModalUpdateUser(true);
    setDataUpdate(user);
  };

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
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
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
          />
        </div>
      </div>
      <ModalCreateUser
        show={shoModalCreateUser}
        setShow={setShoModalCreateUser}
        fetchListUser={fetchListUser}
      />
      <ModalUpdateUser
        show={shoModalUpdateUser}
        setShow={setShoModalUpdateUser}
        dataUpdate={dataUpdate}
      />
    </div>
  );
}

export default ManageUsers;
