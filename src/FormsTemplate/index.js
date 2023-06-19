import { getAllTemplates } from '../services/templates.services'
import { useContext, useEffect, useState } from "react";

export const FormsTemplate = () => {

  const [plantillas, setPlantillas] = useState()
  const [visor, setVisor] = useState()

  useEffect(() => {
    const plantillasList = async () => {
      const res = await getAllTemplates();
      console.log(res);
      setPlantillas(res);
    };
    plantillasList();
  }, []);


    return (
      <>
  
        <h1>PLANTILLA DE FORMULARIO</h1>
        <ul>
          {plantillas && (plantillas.map( p => (
          <>
            <li key={p._id}>
              {p.nombre}
            </li>
          </>)))}
        </ul>

  
      </>
    );
  };