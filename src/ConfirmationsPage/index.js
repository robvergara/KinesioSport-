import { useEffect, useReducer, useState } from "react"
import { getLayout } from "../services/admissions.services";
import {getPatientByCedula} from "../services/register.services"
import { AdmissionsForm } from "./AdmissionsPage";
// import { useNavigate } from "react-router";
const admissionToken = "64594b727512a02cd4c0b040"

export const ConfirmationPage=()=>{
  const [layout, setLayout] = useState()
  const [search, setSearch] = useState()
  const [initialValues, setInitialValues] = useState()
  const [body, setBody] = useState()
  
  // const data = {
  //   body:{
  //     campos:body,
  //     titulo:layout.titulo
  //   },
  //   cedula_tipo:initialValues.cedula_tipo,
  //   cedula_numero: initialValues.cedula_numero,
  //   nombre: layout.titulo

  // }

  const [state, dispatch] = useReducer(reducer, initialState);

  const onAdmission=()=>{dispatch({type: actionTypes.admission})}
  const onEvaluation=()=>{dispatch({type: actionTypes.evaluation})}
  const onValoration=()=>{dispatch({type: actionTypes.valoration})}
  const onRegret=()=>{dispatch({type: actionTypes.regret})}

  // const navigate = useNavigate()

  useEffect(()=>{
    const getTemplate = async()=>{
      const template = await getLayout(admissionToken);
      // console.log(template[0])
      setLayout(template[0]);
    }
    if(layout == null){
      getTemplate()
    }
  },[state]);


  const onSearch= async(e)=>{
    e.preventDefault();
    const res = await getPatientByCedula(search);
    // console.log(res[0]);
    setInitialValues(res[0]);
  }

  const bodyHandleChange = (e) =>{
    const {name, value} = e.target;
    setBody(prevState=>({
      ...prevState,
      [name]:value
    }))
  }


  const onSubmit =(e)=>{
    e.preventDefault()
    console.log(body)
    const keys = Object.keys(body)

    const campos = keys.map(key=>{
      console.log(body.titulo)
      return {
        titulo: key,
        valor: body.key,
        tipo: typeof(body.key)
      }
    })

    const data = {
      body:{
        campos:campos,
        titulo:layout.nombre
      },
      cedula_tipo:initialValues.cedula_tipo,
      cedula_numero: initialValues.cedula_numero,
      nombre: layout.nombre
  
    }
    console.log(data)
  }

  const onBack=()=>{
    setInitialValues(null);
  }

  return(

    <main className="shadow-box col-10 bg-secondary p-4">
      {initialValues && (
        <button className="btn btn-outline-warning btn-light px-5 mb-3" onClick={onBack}>
          regresar busqueda
        </button>
      )}
      <div className="content-view container row bg-white h-auto p-4">

        {layout && (
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
                    <button className="btn btn-outline-warning mx-2" onClick={onAdmission}>
                      admisiones
                    </button>

                    <button className="btn btn-outline-warning mx-2" onClick={onValoration}>
                      valoraciones
                    </button>

                    <button className="btn btn-outline-warning mx-2" onClick={onEvaluation}>
                      evaluaciones
                    </button>
                  </div>

                  {/* COMPONENTES DE LOS TIPOS DE FORMULARIOS */}
                <form onSubmit={onSubmit}>

                  {state.admission && (
                    <AdmissionsForm handleChange={bodyHandleChange} layout={layout} />
                  )}

                  <button className="btn btn-outline-warning" type="submit">
                    guardar
                  </button>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

const initialState = {
  admission: false,
  evaluation: false,
  valoration: false
}

const actionTypes= {
  admission: "ADMISSION",
  valoration: "VALORATION",
  evaluation: "EVALUATION",
  regret: "REGRET"
}

const reducerObject= (state, payload)=>({
  [actionTypes.admission]:{
    ...state,
    admission: true,
    evaluation: false,
    valoration: false
  },
  [actionTypes.evaluation]:{
    ...state,
    admission: false,
    evaluation: true,
    valoration: false
  },
  [actionTypes.valoration]:{
    ...state,
    admission: false,
    evaluation: false,
    valoration: true
  },
  [actionTypes.regret]:{
    ...initialState
  }
})

const reducer = (state, action)=>{
  if(reducerObject(state)[action.type]){
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
}