import { useContext } from "react";
import { FormsContext } from "../../context/forms.context";


export const ButtonsFormSelect=()=>{

  const {onAdmission,onValoration, onEvaluation, getTemplate} = useContext(FormsContext);

  return (
    <>
      <div className="d-flex mb-5">
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
    </>
  )
}