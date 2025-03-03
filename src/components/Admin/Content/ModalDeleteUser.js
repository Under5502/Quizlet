import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiService";
import { toast } from "react-toastify";

function ModalDeleteUser(props) {
  const { show, setShow, dataDeleteUser } = props;

  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDeleteUser.id);

    if (data && data.EC === 0) {
      toast.success("Delete user success");
      handleClose();
      // await props.fetchListUser();
      await props.fetchListUserWithPaginate(1);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Conform Delete User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to Delete this User?{" "}
          <b>
            {dataDeleteUser && dataDeleteUser.email ? dataDeleteUser.email : ""}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitDeleteUser}>
            Conform
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;
