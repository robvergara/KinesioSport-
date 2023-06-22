import { useContext, useEffect } from "react"
import { FormsContext } from "../../context/forms.context"
import { getAllHistories } from "../../services/admissions.services";
import { NavLink } from "react-router-dom";
// import { tabMenu } from "../Tabs";


export const Histories= ()=>{
 const {histories, setHistories, tabMenu, setTabMenu, initialValues} = useContext(FormsContext);
//  console.log(histories)

 const cedula = initialValues.cedula_numero;

 useEffect(()=>{
  const getHistorial = async(cedula)=>{
    const list = await getAllHistories(cedula);
    // console.log(list);
    setHistories(list);
  }
  getHistorial(cedula)
 },[cedula])

 const viewLog=(log)=>{
  // console.log(tabMenu);
  const list = [...tabMenu];
  list.push(log)
  // console.log(list)
  setTabMenu(list);
 }
  return(
    <>
      {/* <h5>Historial de registro</h5> */}
      {!!histories && (
        <>
          {histories.error 
            ? 
              (
                <>
                  <h2>{histories.message}</h2>
                </>
              )
            : 
              (
                <>
                  {histories.map(history=> {
                    const date = history.date.substring(0,10)
                    return(
                    <NavLink className="nav-link" onClick={()=> viewLog(history._id)}>{history.nombre} <b>{date}</b></NavLink>
                  )})}
                </>
              )
          }


        </>
      )}
    </>
  )
}