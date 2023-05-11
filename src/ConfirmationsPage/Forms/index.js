import { useEffect, useState } from "react"
import { Section } from "../Section";

export const Forms=({layout, section, setSection})=>{

  // const [section, setSection] = useState()
  console.log(section)

  const sectionHandleChange = field =>{
    const {value} = field;
    setSection(prevState=>({
      ...prevState,
      [value.name]:value
    }))
  }

  return(
    <>
      <div className="row">

        <h3 className="my-4" key={layout.nombre}>{layout.nombre}</h3>

        {layout.body.map (sec => (
          <>
            <Section sec={sec} setSection={setSection} section={section} sectionHandleChange={sectionHandleChange} />
          </>
        ))}

      </div>

      {/* <button className="btn btn-outline-warning" type="submit">
        guardar
      </button> */}
    </>
  )
}


