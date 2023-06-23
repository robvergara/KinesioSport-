import { getAllTemplates } from "../services/templates.services";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { VisorForm } from "./VisorForm";

export const FormsTemplate = () => {
  const [plantillas, setPlantillas] = useState();
  const [visor, setVisor] = useState();
  const [band_1, setBand_1] = useState(false);
  const [band_2, setBand_2] = useState(false);

  useEffect(() => {
    const plantillasList = async () => {
      const res = await getAllTemplates();
      // console.log(res);
      setPlantillas(res);
    };
    plantillasList();
  }, []);

  const handleChange = (e) => {
    // if(band_1){
    //   confirm('desea confirmar?')
    // }
    const { name, value } = e.target;
    let form = plantillas.find((item) => item._id === value);

    setVisor({ ...form });
    setBand_1(true);
  };

  // console.log("bandera 1:" + band_1);
  // console.log("bandera 2:" + band_2);

  return (
    <>
      <div className="w-100 overflow-auto p-0 m-0 d-flex flex-column mt-2">
        <div className="w-100 overflow-auto row p-0 m-0 justify-content-center">
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm w-25">
              <span
                className="input-group-text buscar w-10 fw-medium"
                id="basic-addon1"
              >
                Formulario:
              </span>
              <select
                className="form-control"
                name="formulario"
                key={"absdhsbdjhgsdj"}
                onChange={handleChange}
              >
                {plantillas ? (
                  <>
                    <option value="" key={0}>
                      seleccionar
                    </option>
                    {plantillas && (
                      <>
                        {React.Children.toArray(
                          plantillas.map((p, index) => (
                            <>
                              <option value={p._id}>{p.nombre}</option>
                            </>
                          ))
                        )}
                      </>
                    )}
                    {/* {plantillas &&
                      plantillas.map((p, index) => (
                        <>
                          <option key={"option_" + p._id} value={p._id}>
                            {p.nombre}
                          </option>
                        </>
                      ))} */}
                  </>
                ) : (
                  <>
                    <option value="" key="seleccion">
                      No hay formuarlios
                    </option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="col-12 pt-3">
            <div className="col-12 pt-2 mb-4">
              <div className="card border-0 shadow">
                {/* <VisorForm formulario={visor} /> */}
                {visor && (
                  <>
                    <VisorForm formulario={visor} key={"V_"+visor._id}/>
                  </>
                )}
                {!visor && (
                  <>
                    <div className="card-header p-2 pt-3 border-0 bg-transparent">
                      <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                        <i className="fa-solid fa-newspaper text-white m-3"></i>
                      </div>
                      <div className="text-end">
                        <div className="d-flex justify-content-end m-auto">
                          <p className="text-sm mb-0 text-body-tertiary me-3 align-self-center">
                            Elija un formulario
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
