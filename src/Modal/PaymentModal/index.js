import { useContext, useEffect, useState } from "react"
import {Button, Modal} from "react-bootstrap"
import { ModalContext } from "../../context/modal.context"
import { InfoModal } from "../InfoModal";

export const PaymentModal=({data})=>{
  const {onRegretModal, state, onInfo} = useContext(ModalContext);
  // console.log(data)

  useEffect(() => {

  }, []);

  const onSubmit=(e)=>{
    e.preventDefault();
    const pago = !data.pago
    console.log({...data , pago})
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
        <Modal.Header>
          <Modal.Title>Realizar pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>El total a pagar es: {data.valor}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit} >Pagar</Button>
          <Button onClick={onRegretModal}>Cancelar</Button>
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