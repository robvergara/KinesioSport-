import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getUserById } from '../../services/user.services';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { InfoModal } from '../InfoModal';
import { UserContext } from '../../context/users.context';
import { ModalContext } from '../../context/modal.context';

export function EditUserModal({ show }) {

  const {      
    state,
    onRegretModal,
  }= useContext(ModalContext);

  const {states,functions} = useContext(UserContext)
  const {handleEditUser, changeFields } = functions;
  const {editUserId} = states;

  // const handleClose = () => {
  //   onRegretModal()
  //   // setEdit(false)
  // };

  const [user, setUser] = useState();

  // console.log(editUserId);

  useEffect(()=>{
    const getUser = async(id)=>{
      const res = await getUserById (id)
      // console.log(res);
      setUser(res);
    }

    getUser(editUserId)
  },[])

  if (user)
    return (
    <>
      <Modal 
        show={show} 
        onHide={onRegretModal}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>nombre</Form.Label>
              <input
                type="text"
                placeholder={user.nombre}
                name="nombre"
                onChange = {handleEditUser}
                className='mb-0 text-sm nombre'
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>apellido</Form.Label>
              <input
                type="text"
                placeholder={user.apellido}
                name="apellido"
                onChange = {handleEditUser}
                className='mb-0 text-sm nombre'
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>cedula</Form.Label>
              <input
                type="text"
                placeholder={user.cedula}
                name="cedula"
                onChange = {handleEditUser}
                className='mb-0 text-sm cedula'
            />
            </Form.Group>

            <FormGroup>
              <FormLabel>status</FormLabel>
                <>
                  <select
                    className="form-control"
                    name="status"
                    onChange={handleEditUser}
                  >
                    <option defaultValue value={user.status}>seleccionar</option>

                    {roles.map((rol) => (
                      <option value={rol.value} key={rol.value}>
                        {rol.name}
                      </option>
                    ))}
                  </select>
                </>
            </FormGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={changeFields}>
            Editar
          </Button>
          <Button variant="primary" onClick={onRegretModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

      <InfoModal 
        show={state.info} 
        onRegret={onRegretModal} 
        message={"usuario actualizado con exito!"}
      />
    </>
  );
}

const roles = [
  { name: "admin", value: 1 },
  { name: "fisio", value: 2 },
];