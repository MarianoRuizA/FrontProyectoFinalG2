import { Modal } from "react-bootstrap";
import Login from "../Login/Login";
import '../Login/Login.css'

const ModalLogin = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Login handleClose={handleClose} />
      </Modal.Body>
      <Modal.Footer>
        <p>Si aún no te registraste, seguí los pasos <a href="/" className="link-registro">aquí</a>.</p>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogin;
 