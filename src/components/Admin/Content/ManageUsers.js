import ModalCreateUser from "./ModalCreateUser";

function ManageUsers(props) {
  return (
    <div className="manage-users-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <div>
          <button>Add New Users</button>
        </div>
        <div>
          Table Users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
