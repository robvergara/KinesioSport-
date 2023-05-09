import { createContext } from "react"
import {createPatient} from "../services/register.services"

export const PatientContext = createContext()

export const PatientProvider=({children})=>{

  const onSave=async(body)=>{
    const res = await createPatient(body);
    console.log(res);
    if (res.message){
      console.log(res.message.errors)
    }
    return(res);
  }

  return(
    <PatientContext.Provider
      value={{
        onSave,
      }}
    >
      {children}
    </PatientContext.Provider>
  )
}