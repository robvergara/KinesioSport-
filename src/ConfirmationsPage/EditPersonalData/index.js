import { useContext } from "react"
import { FormsContext } from "../../context/forms.context"
import { updatePatient } from "../../services/register.services";
import { ModalContext } from "../../context/modal.context";
import { InfoModal } from "../../Modal/InfoModal";


export const EditPersonalData=({setEditPD})=>{
  const {initialValues, setInitialValues} = useContext(FormsContext);
  const {onInfo, state, onRegretModal} = useContext(ModalContext)

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInitialValues(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    // console.log(initialValues);
    const res = await updatePatient(initialValues._id, initialValues);
    console.log(res);
    onInfo();

    setTimeout(() => {
      onRegretModal();
      setEditPD(false);
    }, 1500);
  }
  return(
    <>
      <form className="mb-2" onSubmit={onSubmit}>

        <div className="row">

            <div className="col-4 mb-3">
              <label >Primer apellido</label>
              <input 
                type="text"
                className="form-control" 
                name="apellido1"
                placeholder={initialValues.apellido1}
                onChange ={handleChange}
              />

            </div>

            <div className="col-4 mb-3">
              <label >Segundo apellido</label>
              <input
              type="text" 
              className="form-control"  
              placeholder={initialValues.apellido2}
              onChange ={handleChange}
              name="apellido2"
              />
            </div>

            <div className="col-4 mb-3">
              <label >Nombres </label>
              <input 
                type="text" 
                className="form-control"  
                placeholder={initialValues.nombre}
                onChange ={handleChange}
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
              placeholder={initialValues.cedula_numero}
              onChange ={handleChange}
              />
            </div>

            <div>
                <label> Fecha de nacimiento </label>
                <input
                  type="date"
                  className="form-control"
                  name="nacimiento"
                  id="nacimiento"
                  placeholder={initialValues.nacimiento}

                  onChange={handleChange}
                />
            </div>

            <div className="col-4 mb-3">
              <label>Dirección </label>
              <input
              type="text" 
              className="form-control"  
              name="direccion"
              placeholder={initialValues.direccion}
              onChange ={handleChange}
              />
            </div>

            {/* <div>
                <label> Entidad </label>
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
            </div> */}

            <div className="col-4 mb-3">
              <label> Contacto </label>
              <input
              type="number" 
              className="form-control"  
              name="celular"
              placeholder={initialValues.celular}
              onChange ={handleChange}
              />
            </div>

            <div className="col-4 mb-3">
              <label> Familiar </label>
              <input
              type="text" 
              className="form-control"  
              name="familiar"
              placeholder={initialValues.familiar}
              onChange ={handleChange}
              />
            </div>

            <div className="col-4 mb-3">
              <label> Parentesco </label>
              <input
              type="number" 
              className="form-control"  
              name="parentezco"
              placeholder={initialValues.parentezco}
              onChange ={handleChange}
              />
            </div>

            <div className="col-4 mb-3">
              <label> Contacto familar</label>
              <input
              type="number" 
              className="form-control"  
              name="familiar_celular"
              placeholder={initialValues.familiar_celular}
              onChange ={handleChange}
              />
            </div>
            
          </div>

        {/* BOTONES DE ACCION */}

        <button className="btn btn-outline-warning btn-light px-5 mb-3" type="submit">
          editar
        </button>
        <button className="btn btn-outline-warning btn-light px-5 mb-3" onClick={()=> setEditPD(false)}>
          atras
        </button>

      </form>

      <InfoModal show={state.info} message={"Paciente actualizado!"} onRegret={onRegretModal}/>
    </>
  )
}