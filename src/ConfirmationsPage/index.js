import { useContext } from "react"
import {getPatientByCedula} from "../services/register.services"
import { Forms } from "./Forms";
import { FormsContext } from "../context/forms.context";
import { Histories } from "./Histories";
import { PersonalData } from "./PersonalData";
import { ButtonsFormSelect } from "./Forms/ButtonsFormSelect";


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

        
          <div className="row">
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
                <div className="col-6">

                  <PersonalData initialValues={initialValues}/>
                  <Histories cedula={initialValues.cedula_numero} />

                </div>
                

                <div className="col-6">

                  {/* SELECCION DE FORMULARIOS */}
                  <ButtonsFormSelect/>

                  {/* COMPONENTES DE LOS TIPOS DE FORMULARIOS */}
                {layout && (

                <form onSubmit={onSubmit}>

                  {(state.admission || state.evaluation || state.valoration == true) && (
                    <>
                      <Forms layout={layout} section={section} setSection={setSection} />
                      <button className="btn btn-outline-warning" type="submit">
                        guardar
                      </button>
                    </>
                  )}

                </form>
                )}
                </div>
              </>
            )}
          </div>
        
      </div>
    </main>
  )
}
