import { createContext, useEffect } from 'react'
import {createEps, getAllEps, getEpsById} from '../services/eps.services'

export const EpsContext = createContext()

export const EpsProvider=({children})=>{
  
  useEffect(()=>{
  },[])

  const onSave=async(body)=>{
    const res = await createEps(body)
    console.log(res);
    return res
  }

  const onGet = async()=>{
    const res = await getAllEps()
    // console.log(res)
    return res
  }

  const getById= async(id)=>{
    const res = await getEpsById(id);
    console.log(res);
    return res;
  }


  return(
    <EpsContext.Provider
      value={{
        onSave,
        onGet,
        getById
      }}
    >
      {children}
    </EpsContext.Provider>
  )
}