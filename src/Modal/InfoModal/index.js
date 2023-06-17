import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function InfoModal({show, onRegret, message}) {

  // const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={onRegret} centered>
        <Modal.Header className="fondo-kinesio text-white" closeButton>
          <Modal.Title>Aviso</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center popups'>{message}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}