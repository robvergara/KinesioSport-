import Modal from 'react-bootstrap/Modal';
import { RegisterForm } from '../../RegisterForm';
import { useContext } from 'react';
import { ModalContext } from '../../context/modal.context';
import { InfoModal } from '../InfoModal';


export const RegisterPatientModal =({show})=>{

  const {      
    onRegretModal,
    state,
  }= useContext(ModalContext);

  return(
    <>

      <Modal 
        show={show} 
        onHide={onRegretModal}         
        backdrop="static"
        keyboard={false} centered
        className="modal-xl border-0">

        <Modal.Header className="fondo-kinesio text-white" closeButton >
          <Modal.Title>Registro de Paciente</Modal.Title>
        </Modal.Header>

        <Modal.Body className='popups'>
          <>
            <RegisterForm/>
          </>
        </Modal.Body>

        {/* <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer> */}

      </Modal>

      <InfoModal 
        show={state.info} 
        onRegret={onRegretModal} 
        message={"usuario creado con exito!"}
      />
    </>
  )
}