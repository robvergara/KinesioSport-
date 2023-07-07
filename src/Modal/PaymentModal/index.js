import { useContext, useEffect, useState } from "react"
import {Button, Form, Modal} from "react-bootstrap"
import { ModalContext } from "../../context/modal.context"
import { InfoModal } from "../InfoModal";
import { updatePayment } from "../../services/admissions.services";

export const PaymentModal=({data})=>{
  const [paymentData, setPaymentData]= useState(data)
  const {onRegretModal, state, onInfo} = useContext(ModalContext);
  // console.log(data)

  const handleChange=(e)=>{
    const{name, value} = e.target;
    setPaymentData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }
  useEffect(() => {

  }, []);

  const onSubmit=(e)=>{
    e.preventDefault();
    const pago = !data.pago
    // console.log({...data , pago})
    updatePayment(data._id, {paymentData, pago})
    onInfo()
  };

  return(
    <>
      <Modal
        show={state.payment}
        onHide={onRegretModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="fondo-kinesio text-white">
          <Modal.Title>Realizar pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <div className="input-group my-3 input-group-sm">
              <span className="input-group-text entradas" id="basic-addon1">
                Monto:
              </span>
              <input
                type="text"
                className="form-control"
                name="valor"
                id="valor"
                onChange={handleChange}
                placeholder="coloque el monto a pagar"
              />
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit} className='btn-sm buscar border-0'>Pagar</Button>
          <Button onClick={onRegretModal} className='btn-sm buscar border-0'>Cancelar</Button>
        </Modal.Footer>
      </Modal>

      {/* CREAR UN NUEVO ESTADO PARA MOSTRAR EL PAGO EXITOSO DE LA ADMISION */}
      <InfoModal
        show={state.info}
        onRegret={onRegretModal}
        message={"pago realizado exitosamente!"}
      />
    </>
  )
}