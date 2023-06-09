import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function InfoModal({show, setShow, message}) {

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aviso</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>{message}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}