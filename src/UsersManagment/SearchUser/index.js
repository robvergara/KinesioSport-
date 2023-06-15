import { useEffect, useState } from "react";
import { deleteUser, getAllUsers, getUserByCedula, updateUser } from "../../services/user.services";
import { ConfirmationModal } from "../../Modal/ConfirmationModal";
import { InfoModal } from "../../Modal/InfoModal";

import "./style.css";
import { useAuth } from "../../context/auth";
import { EditUserModal } from "../../Modal/EditUserModal";

export const SearchUser = () => {
  const [value, setValue] = useState('');
  const [user, setUser] = useState();
  const [list, setList] = useState();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [res, setRes] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editUserId, setEditUserId] = useState();

  const auth = useAuth()

  let usersList = []

  const handleShow = () => setShow(true);

  useEffect(()=>{

      const userList = async()=>{
        const res = await getAllUsers();
        // console.log(res);
        setList(res);
      }
      userList();


  },[]);

  if(!value.length >= 1) {
    usersList = list;
    // console.log(usersList)
  }else{
    usersList = list.filter(usuario => {
      const cedula = usuario.cedula
      return cedula.includes(value)
    })
    // console.log(usersList)
  }
  //MANEJADOR DE BUSQUEDA DE USUARIO POR CEDULA
  const onHandleSearch = (e)=>{
    setValue(e.target.value);
  }
  //FUNCION BUSQUEDA DE USUARIO
  const onSearch = async (e) => {
    // console.log(value)
    e.preventDefault();
    const res = await getUserByCedula(value);
    console.log(res);
    setUser(res);
  };
  //FUNCION ELIMINAR USUARIO
  const delUser = async (id) => {
    // e.preventDefault();
    console.log(id);
    const res = await deleteUser(id);
    res.message = "usuario eliminado con exito!";
    setRes(res);
    setShow(false);
    setShowModal(true);
    setTimeout(() => {
      setUser(null);
      window.location.reload()
    }, 2000);
    // return res
  };
  //FUNCION REGRESAR ESTADO DEL MODAL
  const onRegret = (e) => {
    e.preventDefault();
    setUser(null);
  };
  //FUNCION PARA MOSTRAR LOS INPUT PARA CAMBIAR LOS DATOS DE UN USUARIO
  const editFields =(e,id)=>{
    e.preventDefault();
    setEdit(true);
    setEditUserId(id)
  }


  return (
    <>
      <div className="h-100 w-100">
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container-fluid py-1 px-3 w-100">
            {/* BUSCADOR */}
            <div className="collapse navbar-collapse">
              <form onSubmit={onSearch} className="">
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="número de documento"
                    aria-label="Sizing example input"
                    name="cedula_numero"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={onHandleSearch}
                  />
                  <button className="btn buscar bg-gradient" type="submit">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
            {/* DATOS DE USUARIO INGRESADO */}
            {auth.user && (
              <>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                  <li className="breadcrumb-item mini-titulo">{auth.user.nombre}</li>
                  <li className="breadcrumb-item mini-titulo seccion">
                    {
                      auth.user.status === 0? "Super" : 
                      auth.user.status === 1? "Admin" :
                      "Fisio"
                      }
                  </li>
                </ol>
              </nav>
              </>
            )}
          </div>
        </nav>
        {/* CONTAINER DE LA TABLA DE USUARIOS */}
        <div className="container-fluid py-4 ">
          <div className="row">
            <div className="col-12">
              <div className="card my-3 border-0">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent border-0">
                  <div className="fondo-kinesio shadow-primary border-radius-lg pt-4 pb-3 rounded-3 shadow shadow">
                    <h6 className="text-white text-capitalize ps-3">
                      Usuarios
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2 bg-transparent shadow rounded border-0">
                  <div className="table-responsive p-0 border-0">
                    <table className="table align-items-center mb-0 border-0">
                      {/* EMCABEZADO DE LA TABLA */}
                      <thead>
                        <tr>
                          <th className="text-uppercase ps-3 w-50">Usuario</th>
                          <th className="text-uppercase ps-2 w-25">Cedula</th>
                          <th className="text-center text-uppercase w-10">
                            Status
                          </th>
                          <th className="text-center text-uppercase w-10">
                           
                          </th>
                        </tr>
                      </thead>

                      {/* CUERPO DE LA TABLA */}
                      <tbody className="border-0">

                      {!!usersList && usersList.map(user =>(
                          <>
                            <tr className="border-0">
                              {/* NOMBRE DE USUARIOS */}
                              <td className="border-0">
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src="./kinesio-sinfondo.png"
                                      alt="mdo"
                                      width="24"
                                      height="24"
                                      className="avatar avatar-sm me-3 border-radius-lg"
                                    />
                                  </div>
                                  <div className="d-flex justify-content-center">

                                        <p className="mb-0 me-1 text-sm nombre">
                                          {user.nombre}
                                        </p>
                                        <p className="mb-0 text-sm nombre">
                                          {user.apellido}
                                        </p>

                                  </div>
                                </div>
                              </td>
                              {/* CEDULA */}
                              <td className="d-flex align-items-center border-0">
                                <div className="d-flex py-1 ">
                                  <div className="d-flex flex-column justify-content-center">

                                      <p className="mb-0 text-sm cedula">
                                        {user.cedula}
                                      </p>

                                  </div>
                                </div>
                              </td>
                              {/* STATUS */}
                              <td className="align-middle text-center text-sm border-0">

                                    {user.status === 0 ? (
                                      <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center master bg-gradient">
                                        MASTER
                                      </span>
                                    ) : user.status === 1 ? (
                                      <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center admin bg-gradient">
                                        ADMIN
                                      </span>
                                    ) : (
                                      <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center fisio bg-gradient">
                                        FISIO
                                      </span>
                                    )}
                                  
                              </td>

                              {/* BOTONES DE ACCION DE USUARIOS */}
                              <td className="align-middle text-center border-0">
                                <div className="d-flex px-2 justify-content-center">
                                  <div className="d-flex flex-column justify-content-center">
                                    {/* BOTON EDITAR - ENVIAR CAMBIOS */}
                                    <button className="btn btn-primary btn-sm me-2 my-0" onClick={(e)=> editFields(e,user._id)}>

                                      <i class="fa-solid fa-pen-to-square"></i>

                                    </button>
                                    
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    {/* BOTON ELIMINAR - CANCELAR EDICION*/}
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm my-0"
                                      onClick={handleShow}
                                    >
                                      <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                  </div>
                                </div>
                              </td>
                            </tr>
                            
                            {/* MODAL DE CONFIRMACION DE ESTADOS */}
                            <ConfirmationModal
                              show={show}
                              setShow={setShow}
                              handleShow={handleShow}
                              deleteUser={delUser}
                              id={user._id}
                            />
                            {res && (
                              <InfoModal
                                message={res.message}
                                show={showModal}
                                setShow={setShowModal}
                              />
                            )}
                          </>
                          )
                        )}
                      </tbody>
                      {edit &&(
                        <EditUserModal 
                          show={edit} 
                          setShow={setEdit} 
                          id={editUserId}
                        />)
                      }
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="d-flex flex-column p-5">
          <>
            {!!user && !user.error && (
              <>

                {/* MODAL INFORMATIVO */}
                {res && (
                  <InfoModal
                    message={res.message}
                    show={showModal}
                    setShow={setShowModal}
                  />
                )}
              </>
            )}
            {!!user && user.error && (
              <div className="card p-3">
                <h3 className="card-title">{user.message}</h3>

                <button
                  className="btn btn-outline-warning my-3"
                  onClick={onRegret}
                >
                  regresar
                </button>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};
