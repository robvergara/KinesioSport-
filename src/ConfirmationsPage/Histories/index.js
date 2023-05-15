import { useContext, useEffect } from "react"
import { FormsContext } from "../../context/forms.context"
import { getAllHistories } from "../../services/admissions.services";


export const Histories= ({cedula})=>{
 const {histories, setHistories} = useContext(FormsContext);

 useEffect(()=>{
  const getHistorial = async(cedula)=>{
    const list = await getAllHistories(cedula);
    console.log(list);
    setHistories(list);
  }
  getHistorial(cedula)
 },[])
  return(
    <>
      <h5>Historial de registro</h5>
      {!!histories && (
        <>
          {histories.map(history=> {
            const date = history.date.substring(0,10)
            return(
            <p>{history.nombre} {date}</p>
          )})}
        </>
      )}
    </>
  )
}