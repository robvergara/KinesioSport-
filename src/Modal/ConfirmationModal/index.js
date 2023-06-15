import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ConfirmationModal({show, setShow, deleteUser, id }) {

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Estas seguro que deseas eliminar al usuario?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => deleteUser(id)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}