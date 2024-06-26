import { Modal } from "react-bootstrap";
import Login from "../Login/Login";
import '../Login/Login.css'
import { useNavigate } from "react-router-dom";

const ModalLogin = ({ show, handleClose, cerrarMenu  }) => {
  const navegacion = useNavigate()
  
  const irARegistro = () => {
    navegacion("/registro");
    handleClose();
    cerrarMenu()
  };
  return (
    <Modal show={show} onHide={handleClose} cerrarMenu ={cerrarMenu} backdrop="static" keyboard={false} className="modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Login handleClose={handleClose} />
      </Modal.Body>
      <Modal.Footer>
        <p>Si aún no te registraste, seguí los pasos <a onClick={irARegistro} className="link-registro">aquí</a>.</p>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogin;
