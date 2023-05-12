import { useContext } from "react"
import {getPatientByCedula} from "../services/register.services"
import { Forms } from "./Forms";
import { FormsContext } from "../context/forms.context";


export const ConfirmationPage=()=>{
  const {
    onAdmission,
    onEvaluation,
    onValoration,
    onRegret,
    state,
    getTemplate,
    layout,
    search,
    setSearch,
    initialValues, 
    setInitialValues,
    section,
    setSection,
    onSubmit,
    onBack

  } = useContext(FormsContext)

  const onSearch= async(e)=>{
    e.preventDefault();
    const res = await getPatientByCedula(search);
    // console.log(res[0]);
    setInitialValues(res[0]);
  }

  return(

    <main className="shadow-box col-10 bg-secondary p-4">
      {initialValues && (
        <button className="btn btn-outline-warning btn-light px-5 mb-3" onClick={onBack}>
          regresar busqueda
        </button>
      )}
      <div className="content-view container row bg-white h-auto p-4">

        
          <div>
            {!initialValues && (

              <form onSubmit={onSearch}>

                <h3 className="mb-3">Buscar paciente</h3>
                <div className="row">

                  <div className="col-5 mb-3">
                    <label>Documento </label>
                    <input
                    type="number" 
                    className="form-control" 
                    placeholder="numedo de documento" 
                    name="cedula_numero"
                    onChange={(e)=> setSearch(e.target.value)}
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
            )}

            {initialValues && (
              <>
                <form>

                  {/* COMPOMENTE DE DATOS PERSONALES */}
                  <h3>Datos personales</h3>
                  <div className="row">

                    <div className="col-3 mb-3">
                      <label >Primer apellido</label>
                      <input 
                        type="text"
                        className="form-control" 
                        name="apellido1"
                        value={initialValues.apellido1}
                        readOnly
                      />

                    </div>

                    <div className="col-3 mb-3">
                      <label >Segundo apellido</label>
                      <input
                      type="text" 
                      className="form-control"  
                      value={initialValues.apellido2}
                      readOnly
                      name="apellido2"
                      />
                    </div>

                    <div className="col-3 mb-3">
                      <label >Nombres </label>
                      <input 
                        type="text" 
                        className="form-control"  
                        value={initialValues.nombre}
                        readOnly
                        name="nombre"
                      />
                    </div>

                    <div className="col-3 mb-3">
                      <label>tipo de documento </label>
                      <input
                      type="text" 
                      className="form-control" 
                      name="cedula_tipo"
                      value={initialValues.cedula_tipo}
                      readOnly
                      />
                    </div>

                    <div className="col-3 mb-3">
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
                
                  {/* BOTONES DE INTERACCION CON LA INTERFAZ */}

                  {/* REGRESAR LOS FORMULARIOS */}
                  <button className="btn btn-outline-warning btn-light px-5 mb-3" onClick={onRegret}>
                    atras
                  </button>

                  {/* SELECCION DE FORMULARIOS */}
                  <div className="d-flex">
                    <button className="btn btn-outline-warning mx-2" onClick={()=>{onAdmission(); getTemplate()}}>
                      admisiones
                    </button>

                    <button className="btn btn-outline-warning mx-2" onClick={()=> {onValoration(); getTemplate()}}>
                      valoraciones
                    </button>

                    <button className="btn btn-outline-warning mx-2" onClick={()=> {onEvaluation(); getTemplate()}}>
                      evaluaciones
                    </button>
                  </div>

                  {/* COMPONENTES DE LOS TIPOS DE FORMULARIOS */}
                {layout && (

                <form onSubmit={onSubmit}>

                  {(state.admission || state.evaluation || state.valoration == true) && (
                    <Forms layout={layout} section={section} setSection={setSection} />
                  )}

                  <button className="btn btn-outline-warning" type="submit">
                    guardar
                  </button>
                </form>
                )}
              </>
            )}
          </div>
        
      </div>
    </main>
  )
}
