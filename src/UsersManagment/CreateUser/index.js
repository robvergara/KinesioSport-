import { useState } from "react"
import { createUser } from "../../services/user.services";


export const CreateUser = ()=>{
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null)

  const userHandleChange = (e) =>{
    const {name, value} = e.target;
    setUser(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const showForm =()=>{
    setShow(true)
  }
  const closeForm=()=>{
    setShow(false)
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log(user);
    await createUser(user);
  }

  return(
    <div className="d-flex flex-column p-5">
        {!show && (
          <div className="row">
            <button className="col-4 btn btn-outline-warning" onClick={showForm}>Crear usuario</button>
          </div>
        )}

        {show && (
          <>
            <div className="row">
              <button className="col-4 btn btn-outline-warning" onClick={closeForm}>regresar</button>
            </div>

            <h3 className="form-title mt-5">
              Ingresar nuevo usuario
            </h3>

            <form className="row p-3" onSubmit={onSubmit}>

              <div className="col-4 mb-3 ">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre" 
                  name="nombre"
                  onChange={userHandleChange}
                />
              </div>

              <div className="col-4 mb-3 ">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Apellido" 
                  name="apellido"
                  onChange={userHandleChange}
                />
              </div>

              <div className="col-4 mb-3 ">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="No documento" 
                  name="cedula"
                  onChange={userHandleChange}
                />
              </div>

              <div className="col-4 mb-3 ">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre de usuario" 
                  name="usuario"
                  onChange={userHandleChange}
                />
              </div>

              <div className="col-4 mb-3 ">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Contraseña" 
                  name="contrasena"
                  onChange={userHandleChange}
                />
              </div>

              <div className="col-4 mb-3 ">
                <select  
                  className="form-control" 
                  name="status"
                  onChange={userHandleChange}
                >
                  <option defaultValue>seleccionar</option>

                  {roles.map(rol=>(
                    <option value={rol.value} key={rol.value}>
                      {rol.name}
                    </option>
                  ))}

                </select>
              </div>
              
              <div className="row">
                <button className="col-3 btn btn-outline-warning" type="submit">
                  crear usuario
                </button>
              </div>

            </form>
          </>
        )}

    </div>
  )
}

const roles =[
  {name: "super",value: 0},
  {name: "admin",value: 1},
  {name: "medico",value: 2},
]