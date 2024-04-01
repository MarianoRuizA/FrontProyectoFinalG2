import { Button, Modal } from "react-bootstrap";
import Login from "../Login/Login";
import './ModalLogin.css'

const ModalLogin = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Login />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogin;
