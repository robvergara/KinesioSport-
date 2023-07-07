import { useContext, useEffect, useState } from "react"
import { FormsContext } from "../../context/forms.context"
import { getAllHistories, getHistoriesForAdmission, getAdmissionById } from "../../services/admissions.services";
import { NavLink } from "react-router-dom";
import { Forms } from "../Forms";
import { InfoModal } from "../../Modal/InfoModal";
import { ModalContext } from "../../context/modal.context";
import { AdmissionLecture } from "./AdmissionLecture";


export const AppointmentSection=({id})=>{

  const {initialValues, onEvaluation,onValoration, layout, state, onSubmit, getTemplate, onRegret, setPadreId} = useContext(FormsContext);
  const {onRegretModal} = useContext(ModalContext);
  const [evaluaciones, setEvaluaciones] = useState();
  const [valoracion, setValoracion] = useState()
  const [sessions, setSessions] = useState();
  const [admission, setAdmission]= useState();
  // console.log(initialValues)
  // console.log(layout)
  // console.log(evaluaciones)

  const cedula = initialValues.cedula_numero;
  
  useEffect(()=>{
    const getHistorial = async()=>{
      // console.log(id)
      const admision = await getAdmissionById(id);
      // console.log(admision[0]);
      const list = await getHistoriesForAdmission(id,cedula);
      // console.log(list)

      //PARA OBTENER LA LISTA DE FORMULARIOS DE EVOLUCIONES
      const evolutionList = list.filter(item=> item.plantilla === "649c76f33143bd2e71cedad8");

      //PARA OBTENER LA LISTA DE FORMULARIOS DE VALORACIONES
      const valorationList = list.filter(item=> item.plantilla === "649c76fb3143bd2e71cedada");
      
      //CANTIDAD DE SESIONES
      if(admision){
          setSessions(admision[0].body
            .find(seccion => seccion.titulo === "Datos Administrativos")
            .campos.find(campo => campo.titulo === "Sesiones Ordenadas")
            .valor
          );
      }
      // console.log(list);
      setEvaluaciones(evolutionList);
      setValoracion(valorationList);
      setAdmission(admision[0]);
    }
    getHistorial(cedula)
   },[cedula,id])

   const saveParent=async(e)=>{
    e.preventDefault()
    console.log(id)
    setPadreId(id)
    subm(e)
   }

   const subm=(e)=>{
    onSubmit(e);
   }

  return(
    <>

      {admission && (
        <>
          <button 
            className="btn bg-gradient buscar mb-3" 
            onClick={()=> {onEvaluation()}}
            disabled={
              evaluaciones?
                sessions <= evaluaciones.length || !admission.pago
                ? true 
                : false
              : false
            }
          >
            Nueva evaluación
          </button>

          {admission.body
                .find(seccion => seccion.titulo === "Datos Administrativos")
                .campos.find(campo => campo.titulo === "Servicio")
                .valor == "FISIOTERAPIA"
            ? (
              <>
                <button 
                  className="btn bg-gradient buscar mb-3" 
                  onClick={()=> {onValoration()}}
                  disabled={
                    valoracion?
                      sessions <= valoracion.length || !admission.pago
                      ? true 
                      : false
                    : false
                  }
                >
                  Nueva valoración
                </button>
              </>
            )
            : (

              <button 
                className="btn bg-gradient buscar mb-3" 
                onClick={()=> {onValoration()}}
                disabled={
                  valoracion?
                    1 <= valoracion.length || !admission.pago
                    ? true 
                    : false
                  : false
                }
              >
                Nueva valoración
              </button>
            )
          }
        </>
      )}


      {evaluaciones &&(
        <>
          <p>sesiones ordenadas: <b>{sessions}</b></p>
          <p>cantidad de citas: <b>{evaluaciones.length}</b> </p>
        </>
      )
        
      }
      { admission && (
        <>
          <AdmissionLecture layout={admission} />
        </>
      )}

      {/* FORMULARIO DE EVALUACION Y VALORACION */}
      {(layout && (state.evaluation || state.valoration)) && (
        <>
          <form onSubmit={saveParent}>
            <>
              {/* COMPONENTE DE FORMULARIO */}
              <Forms layout={layout} />
              <button 
                className="btn btn-outline-warning" 
                type="submit"
              >
                guardar
              </button>
              <button className="btn btn-outline-warning" onClick={onRegret}>
                cancelar
              </button>
            </>

          </form>
        </>
      )}
      {/* LISTA DE EVOLUCIONES */}
      {evaluaciones && (
          <>
            {evaluaciones.map(history=> {
              const date = history.date.substring(0,10);
              return(
              <NavLink className="nav-link" onClick={()=> console.log(history)}>
                {history.nombre} <b>{date}</b>
              </NavLink>
            )})}
          </>
        )

      }

      <InfoModal
        show={state.info}
        onRegret={onRegretModal}
        message={"formulario cargado con exito!"}
      />
    </>
  )
}