import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ConfirmationModal({show, onRegret, deleteUser, id }) {

  // const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={onRegret}>
        <Modal.Header className="fondo-kinesio text-white" closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="popups">
          Estas seguro que deseas eliminar al usuario?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onRegret} className='buscar border-0'>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => deleteUser(id)} className='bg-dark border-0'>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}