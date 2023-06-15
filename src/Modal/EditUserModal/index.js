import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getUserById, updateUser } from '../../services/user.services';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { InfoModal } from '../InfoModal';

export function EditUserModal({show, setShow, id }) {

  const [user, setUser] = useState();
  const [changeUser, setChangeUser] = useState();
  const [infoModal, setInfoModal] = useState(false);

  const handleClose = () => setShow(false);

  // console.log(id);

  useEffect(()=>{
    const getUser = async(id)=>{
      const res = await getUserById (id)
      // console.log(res);
      setUser(res);
    }

    getUser(id)
  },[])

  //MANEJADOR DE DATOS DEL USUARIO A CAMBIAR 
  const handleEditUser = (e)=>{
    const {name, value} = e.target;
    setChangeUser(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

    //ENVIAR LOS CAMPOS EDITADOS DEL USUARIO
    const changeFields=async(e)=>{
      e.preventDefault();
      console.log(id,changeUser);
      const res = await updateUser(id,changeUser);
      console.log(res);
      handleClose
      setInfoModal(true)
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }

  if (user)
    return (
    <>
      <Modal 
        show={show} 
        onHide={handleClose}
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
          <Button variant="primary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
      <InfoModal show={infoModal} setShow={setInfoModal} message={"usuario actualizado con exito!"}/>
    </>
  );
}

const roles = [
  { name: "admin", value: 1 },
  { name: "fisio", value: 2 },
];