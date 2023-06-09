import { useState } from "react"
import { deleteUser, getUserByCedula } from "../../services/user.services";
import { ConfirmationModal } from "../../Modal/ConfirmationModal";
import { InfoModal } from "../../Modal/InfoModal";

export const SearchUser = ()=>{
  const [value, setValue] = useState();
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [res, setRes] = useState(null)

  const handleShow = () => setShow(true);


  const onSearch= async(e)=>{
    // console.log(value)
    e.preventDefault()
    const res = await getUserByCedula(value);
    console.log(res)
    setUser(res);
  }

  const delUser = async(id)=>{
    // e.preventDefault();
    console.log(id)
    const res = await deleteUser(id);
    res.message = "usuario eliminado con exito!";
    setRes(res);
    setShow(false);
    setShowModal(true);
    setTimeout(() => {
      setUser(null)
    }, 2000);
    // return res
  }

  const onRegret=(e)=>{
    e.preventDefault();
    setUser(null)
  }

  return(
    <>
      <div className="d-flex flex-column p-5">
        {/* FORMULARIO DE BUSQUEDA DE USUARIO POR CEDULA */}
        <>
          <form onSubmit={onSearch} className="mb-5">

            <h3 className="mb-3">Buscar usuario</h3>
            <div className="row">

              <div className=" mb-3">
                <label>Documento </label>
                <input
                type="number" 
                className="form-control" 
                placeholder="numedo de documento" 
                name="cedula_numero"
                onChange={(e)=> setValue(e.target.value)}
                />
              </div>

            </div>

            <button
              className="btn btn-outline-warning mt-1" 
              type="submit"
            >
              buscar 
            </button>

          </form>
        </>

        <>
          {/* DATOS DEL USUARIO ENCONTRADO */}
          {(!!user && !user.error)  && (
            <>
              <div>
                {/* <h3>Usuario encontrado</h3> */}
                <div className="card">
                  <div className="card-body">

                    <h5 className="card-title">Nombre del usuario: <b>{user.nombre} {user.apellido}</b></h5>
                    <p>numero de cedula: <b>{user.cedula}</b></p>
                    <p>status: <b>{user.status === 0? "Super": user.status === 1? "Admin" : "medico"}</b></p>
                  </div>

                  <div className="text-center mb-3">
                    <button className="btn btn-outline-warning me-2">editar</button>
                    <button
                      type="button" 
                      className="btn btn-outline-warning" 
                      onClick={handleShow}
                    >
                      eliminar
                    </button>
                  </div>

                </div>
              </div>

              {/* MODAL DE CONFIRMACION DE ESTADOS */}
              <ConfirmationModal 
                show={show}
                setShow={setShow} 
                handleShow={handleShow} 
                deleteUser={delUser} 
                id={user._id} 
              />

              <button className="btn btn-outline-warning my-3" onClick={onRegret}>
                regresar
              </button>
              {res && (

                <InfoModal message={res.message} show={showModal} setShow={setShowModal}/>
              )}
            </>
          )}
          {(!!user && user.error) && (
            <>
              <h3>{user.message}</h3>

              <button className="btn btn-outline-warning my-3" onClick={onRegret}>
                regresar
              </button>
            </>
          )}
        </>
      </div>

    </>
  )
}