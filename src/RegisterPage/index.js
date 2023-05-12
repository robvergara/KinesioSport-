import { useContext, useEffect, useState } from "react";
import {PatientContext} from "../context/patients.context"
import { EpsContext } from "../context/eps.context";
import { createAdmission } from "../services/admissions.services";

export const RegisterPage = ()=>{

  const {onSave} = useContext(PatientContext);
  const {onGet} = useContext(EpsContext)
  const [data, setData] = useState()
  const [eps, setEps] = useState()

  useEffect(()=>{
    const getEpsList = async()=>{
      const list = await onGet()
      // console.log(list)
      setEps(list)
    }
    getEpsList()
  },[])

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
    onSave(data)
    createAdmission(data)

  }

  return(
    <>
      <form onSubmit={onSubmit} className="shadow-box col-10 bg-secondary p-4">

        <button className="btn btn-outline-warning btn-light px-5 mb-3">
          Registrar
        </button>

        <div className="content-view container row bg-white h-auto p-4">

          <div className="row">

            <h3 className="my-4">Datos personales</h3>

            <div className="col-3 mb-3">
              <label >Primer apellido</label>
              <input 
                type="text"
                className="form-control" 
                placeholder="primer apellido"
                onChange={handleChange}
                name="apellido1"
              />
            </div>

            <div className="col-3 mb-3">
              <label >Segundo apellido</label>
              <input
               type="text" 
               className="form-control"  
               placeholder="segundo apellido" 
               name="apellido2"
               onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label >Nombres </label>
              <input 
                type="text" 
                className="form-control"  
                placeholder="nombre completo" 
                name="nombre"
                onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label>Tipo de documento </label>
              <select className="form-control" name="cedula_tipo" onChange={handleChange}>
                <option value="">seleccionar</option>
                <option value="cedula ciudadania">cedula de ciudadania</option>
                <option value="cedula extranjera">cedula extranjera</option>
                <option value="pasaporte">pasaporte extranjero</option>
              </select>
            </div>

            <div className="col-3 mb-3">
              <label>Documento </label>
              <input
               type="number" 
               className="form-control" 
               placeholder="numedo de ID" 
               name="cedula_numero"
               onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label>Fecha de Nacimiento </label>
              <input
               type="date" 
               className="form-control"
               name="nacimiento"
               onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label>edad </label>
              <input
               type="number" 
               className="form-control"
               name="edad"
               onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label >Sexo </label>
              <select className="form-control" name="sexo" onChange={handleChange}>
                <option value="">seleccionar</option>
                <option value="masculino">masculino</option>
                <option value="femenino">femenino</option>
                <option value="elle">otro</option>
              </select>
            </div>

            <div className="col-3 mb-3">
              <label>direccion </label>
              <input
               type="text" 
               className="form-control"
               name="direccion"
               onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label>telefono </label>
              <input 
                type="number" 
                className="form-control"
                name="celular"
                onChange={handleChange}
              />
            </div>

            <h3 className="my-4">Datos de contacto</h3>

            <div className="col-3 mb-3">
              <label >Contacto de emergencia </label>
              <input 
                type="text" 
                className="form-control"  
                placeholder="nombre completo" 
                name="familiar"
                onChange={handleChange}
              />
            </div>   
            
            <div className="col-3 mb-3">
              <label >parentesco </label>
              <input 
                type="text" 
                className="form-control"  
                placeholder="relación" 
                name="parentezco"
                onChange={handleChange}
              />
            </div>

            <div className="col-3 mb-3">
              <label>telefono del contacto </label>
              <input 
                type="number" 
                className="form-control"
                name="familiar_celular"
                onChange={handleChange}
              />
            </div>

            <h3 className="my-4">Datos administrativos</h3>

            <div className="col-3 mb-3">
              <label>entidad </label>

              <select
               className="form-control" 
               name="entidad_id" 
               onChange={handleChange}
              >
                <option value="none" key={0}>seleccionar</option>

                {eps && (
                  <>
                    {eps.map(item=>(
                      <>
                        <option 
                          value={item._id}
                          key={item._id}
                        >
                          {item.nombre}
                        </option>
                      </>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="col-3 mb-3">
              <label>Medico remitente </label>
              <select className="form-control" name="" id="">
                <option value="">seleccionar</option>
                <option value="">Ariel</option>
                <option value="">Ajith</option>
                <option value="">Kumar</option>
              </select>
            </div>

            <div className="col-3 mb-3">
              <label>sesiones ordenadas </label>
              <input type="number" className="form-control"/>
            </div>

            <div className="col-3 mb-3">
              <label>lugar de la sesión </label>
              <input type="text" className="form-control"/>
            </div>

            <div>
              <label> orden medica</label>
              <input type="file" className="form-control"/>
            </div>

          </div>

        </div>

      </form>
    </>
  )
}