import { useContext } from "react"
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from "../../context/modal.context"
import { FormsContext } from "../../context/forms.context";
import { Forms } from "../../ConfirmationsPage/Forms";
import { InfoModal } from "../InfoModal";


export const AdmissionModal=({show})=>{

  const {onRegretModal, state:modalState, onInfo }= useContext(ModalContext);
  const{onSubmit,state,layout, onRegret} = useContext(FormsContext)

  return(
    <>

      <Modal 
        show={show} 
        onHide={onRegret}         
        backdrop="static"
        keyboard={false} centered
        className="modal-xl border-0">

        <Modal.Header className="fondo-kinesio text-white" closeButton >
          <Modal.Title>Registro de Paciente</Modal.Title>
        </Modal.Header>

        <Modal.Body className='popups'>
          <>
            <form onSubmit={onSubmit}>
              {(state.admission || state.evaluation || state.valoration === true) && (
                <>
                  {/* COMPONENTE QUE RENDERIZA EL FORMULARIO DE ACUERDO AL JSON ESTIPULADO EN EL BACKEND QUE SE LE ENVIA EN EL ATRIBUTO "LAYOUT" */}
                  <Forms layout={layout} />
                  <button className="btn btn-outline-warning" type="submit" onClick={onInfo}>
                    guardar
                  </button>
                  <button onClick={onRegret} className="btn btn-outline-warning">
                    Cancelar
                  </button>
                </>
              )}
            </form>
          </>
        </Modal.Body>

      </Modal>

      <InfoModal 
        show={modalState.info} 
        onRegret={onRegretModal} 
        message={"Admision creada!"}
      />
    </>
  )
}