import { useEffect, useState } from "react"
import { getLayout } from "../../services/admissions.services";
// import { useNavigate } from "react-router";

export const AdmissionsForm=({handleChange, layout})=>{


  return(
    <>
      <div className="row">

        <h3 className="my-4">{layout.nombre}</h3>

        {layout.body.map (field => (
          <>
            <h5> {field.titulo} </h5>
              {field.campos.map(campo => (
                <>
                  <div className="col-3 mb-3">
                    <label >{campo.titulo} </label>
                    <input 
                      type={campo.tipo}
                      className="form-control" 
                      placeholder={campo.titulo}
                      onChange={handleChange}
                      name={campo.titulo}
                    />
                  </div>
                </>
              ))}
          </>
        ))}

      </div>

      {/* <button className="btn btn-outline-warning" type="submit">
        guardar
      </button> */}
    </>
  )
}


