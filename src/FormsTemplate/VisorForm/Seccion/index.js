import React from "react";
import { VisorCampos } from "../Campos";

export const VisorSeccion = ({
  body,
  id,
  cambios,
  campo,
  eliminar_s,
  eliminar_c,
}) => {
  return (
    <>
      {React.Children.toArray(
        body.map((s, i) => (
          <>
            <div className="col-12 mb-4" key={"S" + i + s.titulo}>
              <div className="input-group mb-3 input-group-sm w-50">
                <span
                  className="input-group-text entradas w-10 fw-medium"
                  id="basic-addon1"
                >
                  Seccion {i + 1}:
                </span>
                <input
                  type="text"
                  className="form-control fondo-gris"
                  name={"S" + i}
                  id={"S" + i}
                  onBlur={cambios}
                  placeholder="Ingresar un titulo a la SECCIÓN"
                  defaultValue={s.titulo}
                />
                <button
                  className="btn buscar"
                  name={"add-campo-" + i}
                  onClick={campo}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                {s.campos.length == 0 ? (
                  <>
                    <button
                      className="btn btn-danger"
                      name={"borrar-seccion-" + i}
                      onClick={eliminar_s}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-danger" disabled>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </>
                )}
              </div>
              <div className="row">
                <VisorCampos
                  campos={s.campos}
                  seccion={i}
                  id={id}
                  cambios={cambios}
                  eliminar_c={eliminar_c}
                />
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
};
