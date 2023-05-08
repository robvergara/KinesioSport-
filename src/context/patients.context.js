import { createContext } from "react"
import {createPatient} from "../services/register.services"

export const PatientContext = createContext()

export const PatientProvider=({children})=>{

  const onSave=async(body)=>{
    const res = await createPatient(body);
    // console.log(res);
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