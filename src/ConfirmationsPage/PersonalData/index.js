import { useContext } from "react"
import { FormsContext } from "../../context/forms.context"


export const PersonalData=({initialValues})=>{

  const {onRegret} = useContext(FormsContext)

  return(
    <>
      <div className="mb-5">

        <form>

          {/* COMPOMENTE DE DATOS PERSONALES */}
          <h3>Datos personales</h3>
          <div className="row">

            <div className="col-4 mb-3">
              <label >Primer apellido</label>
              <input 
                type="text"
                className="form-control" 
                name="apellido1"
                value={initialValues.apellido1}
                readOnly
              />

            </div>

            <div className="col-4 mb-3">
              <label >Segundo apellido</label>
              <input
              type="text" 
              className="form-control"  
              value={initialValues.apellido2}
              readOnly
              name="apellido2"
              />
            </div>

            <div className="col-4 mb-3">
              <label >Nombres </label>
              <input 
                type="text" 
                className="form-control"  
                value={initialValues.nombre}
                readOnly
                name="nombre"
              />
            </div>

            <div className="col-4 mb-3">
              <label>tipo de documento </label>
              <input
              type="text" 
              className="form-control" 
              name="cedula_tipo"
              value={initialValues.cedula_tipo}
              readOnly
              />
            </div>

            <div className="col-4 mb-3">
              <label>Documento </label>
              <input
              type="number" 
              className="form-control"  
              name="cedula_numero"
              value={initialValues.cedula_numero}
              readOnly
              />
            </div>
            
          </div>
        </form>

        {/* REGRESAR LOS FORMULARIOS */}
        <button className="btn btn-outline-warning btn-light px-5 mb-3" onClick={onRegret}>
          atras
        </button>

      </div>
    </>
  )
}