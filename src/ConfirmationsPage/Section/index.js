import { useEffect, useState } from "react";
import { Field } from "../Field"


export const Section=({sec, sectionHandlechange, setSection })=>{
  const [fields, setFields] = useState([])

  const sectionHandleChange = field =>{
    // const {value} = field;
    console.log(field)
    setSection(prevState=>({
      ...prevState,
      [sec.titulo]:field
    }))
  }

  const fieldHandleChange = (e) =>{
    const {name, value, type} = e.target;
    setFields(prevState=>({
      ...prevState, 
      [name]:{
        valor:value,
        titulo:name,
        tipo: type,
      }
    }))
    // console.log(fields)
  }
  useEffect(()=>{
    if(fields != null) {
      // console.log(fields)
      sectionHandleChange(fields)
    }
  },[fields])

  return(
    <>
      <h5> {sec.titulo} </h5>
      {sec.campos.map(campo => (
        <>

          <Field campo={campo} handleChange={fieldHandleChange} key={campo.titulo}/>

        </>
      ))}
    </>
  )
}