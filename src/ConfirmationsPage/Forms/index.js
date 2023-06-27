import { useContext } from "react"
import { Section } from "../Section";
import { FormsContext } from "../../context/forms.context";

export const Forms=()=>{

  const { layout } = useContext(FormsContext)

  // console.log(layout)

  return(
    <>
      <div className="row">

        <h3 className="my-4" key={layout.nombre}>{layout.nombre}</h3>

        {layout.body.map (sec => (
          <>
            <Section sec={sec} />
          </>
        ))}

      </div>

      {/* <button className="btn btn-outline-warning" type="submit">
        guardar
      </button> */}
    </>
  )
}


