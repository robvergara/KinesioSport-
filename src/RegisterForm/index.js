import { useContext, useEffect, useState } from "react";
import {PatientContext} from "../context/patients.context"
// import { EpsContext } from "../context/eps.context";
import { createAdmission } from "../services/admissions.services";
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { ModalContext } from "../context/modal.context";

export const RegisterForm = ()=>{
  const {onInfo} = useContext(ModalContext);
  const {onSave} = useContext(PatientContext);
  const [data, setData] = useState()

  //PARA OBTENER EPS
  // const {onGet} = useContext(EpsContext)
  // const [eps, setEps] = useState()

  // useEffect(()=>{
  //   const getEpsList = async()=>{
  //     const list = await onGet()
  //     // console.log(list)
  //     setEps(list)
  //   }
  //   getEpsList()
  // },[])

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
    onInfo()

  }

  return(
    <form onSubmit={onSubmit}>

      <h3 className="my-4">Datos personales</h3>

      <FormGroup className="mb-3">
        <FormLabel >Primer apellido</FormLabel>
        <input 
          type="text"
          className='mb-0 text-sm nombre'
          placeholder="primer apellido"
          onChange={handleChange}
          name="apellido1"
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel >Segundo apellido</FormLabel>
        <input
          type="text" 
          className='mb-0 text-sm nombre' 
          placeholder="segundo apellido" 
          name="apellido2"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel >Nombres </FormLabel>
        <input 
          type="text" 
          className='mb-0 text-sm nombre' 
          placeholder="nombre completo" 
          name="nombre"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Tipo de documento </FormLabel>
        <select className='mb-0 text-sm nombre' name="cedula_tipo" onChange={handleChange}>
          <option value="">seleccionar</option>
          <option value="cedula ciudadania">cedula de ciudadania</option>
          <option value="cedula extranjera">cedula extranjera</option>
          <option value="pasaporte">pasaporte extranjero</option>
        </select>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Documento </FormLabel>
        <input
          type="number" 
          className='mb-0 text-sm nombre' 
          placeholder="numedo de ID" 
          name="cedula_numero"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Fecha de Nacimiento </FormLabel>
        <input
          type="date" 
          className='mb-0 text-sm nombre'
          name="nacimiento"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>edad </FormLabel>
        <input
          type="number" 
          className='mb-0 text-sm nombre'
          name="edad"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel >Sexo </FormLabel>
        <select className='mb-0 text-sm nombre' name="sexo" onChange={handleChange}>
          <option value="">seleccionar</option>
          <option value="masculino">masculino</option>
          <option value="femenino">femenino</option>
          <option value="elle">otro</option>
        </select>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>direccion </FormLabel>
        <input
          type="text" 
          className='mb-0 text-sm nombre'
          name="direccion"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>telefono </FormLabel>
        <input 
          type="number" 
          className='mb-0 text-sm nombre'
          name="celular"
          onChange={handleChange}
        />
      </FormGroup>

      <h3 className="my-4">Datos de contacto</h3>

      <FormGroup className="mb-3">
        <FormLabel >Contacto de emergencia </FormLabel>
        <input 
          type="text" 
          className='mb-0 text-sm nombre'  
          placeholder="nombre completo" 
          name="familiar"
          onChange={handleChange}
        />
      </FormGroup>   
      
      <FormGroup className="mb-3">
        <FormLabel >parentesco </FormLabel>
        <input 
          type="text" 
          className='mb-0 text-sm nombre'  
          placeholder="relación" 
          name="parentezco"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>telefono del contacto </FormLabel>
        <input 
          type="number" 
          className='mb-0 text-sm nombre'
          name="familiar_celular"
          onChange={handleChange}
        />
      </FormGroup>


      {/* DATOS ADMINISTRATIVOS */}
      {/* <h3 className="my-4">Datos administrativos</h3>

      <FormGroup className="mb-3">
        <FormLabel>entidad </FormLabel>

        <select
          className='mb-0 text-sm nombre' 
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
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Medico remitente </FormLabel>
        <select className='mb-0 text-sm nombre' name="" id="">
          <option value="">seleccionar</option>
          <option value="">Ariel</option>
          <option value="">Ajith</option>
          <option value="">Kumar</option>
        </select>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>sesiones ordenadas </FormLabel>
        <input type="number" className='mb-0 text-sm nombre'/>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>lugar de la sesión </FormLabel>
        <input type="text" className='mb-0 text-sm nombre'/>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel> orden medica</FormLabel>
        <input type="file" className='mb-0 text-sm nombre'/>
      </FormGroup> */}

      <button 
        type="submit"
        className="btn bg-gradient buscar"
        >
        Registrar
      </button>

    </form>
  )
}