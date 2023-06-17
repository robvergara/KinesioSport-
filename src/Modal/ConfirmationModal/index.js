import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from '../../context/modal.context';
import { UserContext } from '../../context/users.context';

export function ConfirmationModal() {
  const { state, onRegretModal } = useContext(ModalContext);
  const { states, functions } = useContext(UserContext);
  const { editUserId } = states;
  const {delUser} = functions;
  console.log(editUserId);
  // const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={state.confirm} onHide={onRegretModal}>
        <Modal.Header className="fondo-kinesio text-white" closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="popups">
          Estas seguro que deseas eliminar al usuario?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onRegretModal} className='buscar border-0'>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => delUser(editUserId)} className='bg-dark border-0'>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}