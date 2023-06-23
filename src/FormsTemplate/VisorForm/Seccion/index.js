import React from "react";
import { VisorCampos } from "../Campos";

export const VisorSeccion = ({ body, id }) => {
  console.log(body);
  console.log(id);

  const handleChange1 = (e) => {
    // const { name, value } = e.target;
    // setData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  return (
    <>
      {React.Children.toArray(
        body.map((s, i) => (
          <>
            <div className="col-12 mb-4" key={id + "_S_" + i}>
              <div className="input-group mb-3 input-group-sm w-50">
                <span
                  className="input-group-text entradas w-10 fw-medium"
                  id="basic-addon1"
                >
                  Seccion {i + 1}:
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="nombre-seccion"
                  id="nombre-seccion"
                  onChange={handleChange1}
                  placeholder="Ingresar un titulo a la SECCIÓN"
                  defaultValue={s.titulo}
                />
                <button className="btn buscar">add</button>
              </div>
              <div className="row">
                <VisorCampos campos={s.campos} indice={i} id={id} />
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
};
