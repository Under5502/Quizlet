import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

function ManageUsers(props) {
  const LIMIT_USER = 5;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [listUsers, setListUsers] = useState([]);
  const [shoModalUpdateUser, setShoModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDeleteUser, setDeleteUser] = useState({});

  const [shoModalCreateUser, setShoModalCreateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleClickBtnUpdateUser = (user) => {
    setShoModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleCLickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
  };

  const handleClickDelete = (user) => {
    setShowModalDelete(true);
    setDeleteUser(user);
  };

  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPaginate(1);
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log("res.dt", res.DT.users);

      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const resetViewData = () => {
    setDataView({});
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
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleCLickBtnView={handleCLickBtnView}
            handleClickDelete={handleClickDelete}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleCLickBtnView={handleCLickBtnView}
            handleClickDelete={handleClickDelete}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <ModalCreateUser
        show={shoModalCreateUser}
        setShow={setShoModalCreateUser}
        fetchListUser={fetchListUser}
        fetchListUserWithPaginate={fetchListUserWithPaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalUpdateUser
        show={shoModalUpdateUser}
        setShow={setShoModalUpdateUser}
        dataUpdate={dataUpdate}
        fetchListUser={fetchListUser}
        resetUpdateData={resetUpdateData}
        fetchListUserWithPaginate={fetchListUserWithPaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalViewUser
        show={showModalViewUser}
        dataView={dataView}
        setShow={setShowModalViewUser}
        fetchListUserWithPaginate={fetchListUserWithPaginate}
        resetViewData={resetViewData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalDeleteUser
        show={showModalDelete}
        setShow={setShowModalDelete}
        dataDeleteUser={dataDeleteUser}
        fetchListUser={fetchListUser}
        fetchListUserWithPaginate={fetchListUserWithPaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ManageUsers;
