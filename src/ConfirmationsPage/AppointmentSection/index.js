import { useContext, useEffect, useState } from "react"
import { FormsContext } from "../../context/forms.context"
import { getAllHistories } from "../../services/admissions.services";
import { NavLink } from "react-router-dom";


export const AppointmentSection=()=>{

  const {initialValues} = useContext(FormsContext);
  const [evaluaciones, setEvaluaciones] = useState();
  // console.log(initialValues)

  const cedula = initialValues.cedula_numero;
  
  useEffect(()=>{
    const getHistorial = async(cedula)=>{
      const list = await getAllHistories(cedula);
      const admissionList = list.filter(item=> item.plantilla === "645914d61a36206c6d6d7e7d")
      // console.log(list);
      setEvaluaciones(admissionList);
    }
    getHistorial(cedula)
   },[cedula])

  return(
    <>

      <button className="btn bg-gradient buscar mb-3" >
        Nueva evaluación
      </button>
      <p>cantidad de citas: <b>{evaluaciones.length}</b> </p>
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