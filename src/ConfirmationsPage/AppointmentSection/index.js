import { useContext, useEffect, useState } from "react"
import { FormsContext } from "../../context/forms.context"
import { getAllHistories } from "../../services/admissions.services";
import { NavLink } from "react-router-dom";
import { Forms } from "../Forms";


export const AppointmentSection=()=>{

  const {initialValues, onEvaluation, layout, state, onSubmit, getTemplate, onRegret} = useContext(FormsContext);
  const [evaluaciones, setEvaluaciones] = useState();
  const [sessions, setSessions] = useState();
  // console.log(initialValues)
  // console.log(layout)

  const cedula = initialValues.cedula_numero;
  
  useEffect(()=>{
    const getHistorial = async(cedula)=>{
      const list = await getAllHistories(cedula);

      //PARA OBTENER LA LISTA DE FORMULARIOS DE EVOLUCIONES
      const evolutionList = list.filter(item=> item.plantilla === "645914d61a36206c6d6d7e7d");

      //PARA OBTENER EL NUMERO DE SESIONES PUESTAS EN EL ULTIMO FORMULARIO DE ADMISION
      const addmissionList = list.filter(item=> item.plantilla === "64594b727512a02cd4c0b040");
      const lastAdmission = addmissionList[addmissionList.length - 1];

      console.log(lastAdmission.body
        .find(seccion => seccion.titulo === "Datos Administrativos2")
        .campos.find(campo => campo.titulo === "Sesiones Ordenadas")
        .valor
        .valor
      );

      setSessions(lastAdmission.body
        .find(seccion => seccion.titulo === "Datos Administrativos2")
        .campos.find(campo => campo.titulo === "Sesiones Ordenadas")
        .valor
        .valor
      );
      // console.log(list);
      setEvaluaciones(evolutionList);
    }
    getHistorial(cedula)
   },[cedula])

  return(
    <>

      <button 
        className="btn bg-gradient buscar mb-3" 
        onClick={()=> {onEvaluation()}}
        disabled={
          evaluaciones?
            sessions <= evaluaciones.length
            ? true 
            : false
          : false
        }
      >
        Nueva evaluación
      </button>
      {evaluaciones &&(
        <>
          <p>sesiones ordenadas: <b>{sessions}</b></p>
          <p>cantidad de citas: <b>{evaluaciones.length}</b> </p>
        </>
      )
        
      }

      {/* FORMULARIO DE EVALUACION */}
      {(layout && state.evaluation) && (
        <>
          <form onSubmit={onSubmit}>
            <>
              {/* COMPONENTE DE FORMULARIO */}
              <Forms layout={layout} />
              <button className="btn btn-outline-warning" type="submit">
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
      )}
    </>
  )
}