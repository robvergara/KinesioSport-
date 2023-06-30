import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export const options = [
  { value: "", label: "Tipo.." },
  { value: "texto", label: "Texto" },
  { value: "texto-grande", label: "Texto grande" },
  { value: "numerico", label: "Numerico" },
  { value: "opciones", label: "Lista" },
  { value: "archivo", label: "Archivo" },
];

function SelectOptions(props) {
  const list = props.list;
  const campo = props.campo;
  const op = list.map((o, i) => (
    <option value={o.value} key={i}>
      {o.label}
    </option>
  ));

  return (
    <select
      className="form-select form-select-sm"
      defaultValue={props.value}
      key={campo}
    >
      {op}
    </select>
  );
}

export const VisorCampos = ({ campos, seccion, id, cambios, eliminar_c }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(
      Array(4)
        .fill(null)
        .map((u) => false)
    );
  }, []);

  const Abrir = (e) => {
    const { name } = e.target;
    let position = Number(name.replace("abrir_", ""));

    setOpen((prevState) => ({
      ...prevState,
      [position]: !open[position],
    }));
  };

  return (
    <>
      {React.Children.toArray(
        campos.map((c, i) => (
          <>
            {c.lock == true ? (
              <>
                <div
                  className="col-3 col-xxl-2 mb-3"
                  key={"S" + seccion + "_C" + i + c.titulo}
                >
                  <div className="card m-auto m-0 fondo-gris-campos border-1 border-secondary shadow bg-gradient">
                    <div className="card-header">
                      <div className="input-group input-group-sm border-0">
                        <span
                          className="input-group-text entradas"
                          id="inputGroup-sizing-default"
                        >
                          C{i + 1}:
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          defaultValue={c.titulo}
                          name={"S" + seccion + "_C" + i + "_T"}
                          onBlur={cambios}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <select
                        className="form-select form-select-sm boder-0"
                        defaultValue={c.tipo}
                        name={"S" + seccion + "_C" + i + "_O"}
                        onChange={cambios}
                        disabled
                      >
                        {options.map((o, i) => (
                          <option value={o.value} key={i}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {c.tipo === "opciones" ? (
                        <div className="mt-2">
                          <p className="m-auto">
                            <button
                              className="btn buscar btn-sm w-100 border-0"
                              type="button"
                              data-bs-toggle="collapse"
                              name={"abrir_" + i}
                              onClick={(e) => Abrir(e)}
                              aria-expanded={open[i]}
                            >
                              LISTA
                              <i className="fa-solid fa-arrow-down fa-bounce fa-2xs ms-2"></i>
                            </button>
                          </p>
                          <Collapse in={open[i]}>
                            <textarea
                              className="form-control form-control-sm"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Separar las opciones con COMA ,"
                              defaultValue={c.opciones}
                              name={"S" + seccion + "_C" + i + "_TA"}
                              onBlur={cambios}
                              disabled
                            ></textarea>
                          </Collapse>
                        </div>
                      ) : (
                        <div className="mt-2">
                          <p className="m-auto">
                            <button
                              disabled
                              className="btn btn-secondary btn-sm w-100"
                              type="button"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                            >
                              LISTA
                            </button>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="card-footer ">
                      <small className="text-body-secondary d-flex justify-content-center">
                        <button className="btn btn-secundary btn-sm" disabled>
                          <i class="fa-solid fa-lock"></i>
                        </button>
                      </small>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="col-3 col-xxl-2 mb-3"
                  key={"S" + seccion + "_C" + i + c.titulo}
                >
                  <div className="card m-auto m-0 fondo-gris-campos border-1 border-secondary shadow bg-gradient">
                    <div className="card-header">
                      <div className="input-group input-group-sm border-0">
                        <span
                          className="input-group-text entradas"
                          id="inputGroup-sizing-default"
                        >
                          C{i + 1}:
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          defaultValue={c.titulo}
                          name={"S" + seccion + "_C" + i + "_T"}
                          onBlur={cambios}
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <select
                        className="form-select form-select-sm boder-0"
                        defaultValue={c.tipo}
                        name={"S" + seccion + "_C" + i + "_O"}
                        onChange={cambios}
                      >
                        {options.map((o, i) => (
                          <option value={o.value} key={i}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {c.tipo === "opciones" ? (
                        <div className="mt-2">
                          <p className="m-auto">
                            <button
                              className="btn buscar btn-sm w-100 border-0"
                              type="button"
                              data-bs-toggle="collapse"
                              name={"abrir_" + i}
                              onClick={(e) => Abrir(e)}
                              aria-expanded={open[i]}
                            >
                              LISTA
                              <i className="fa-solid fa-arrow-down fa-bounce fa-2xs ms-2"></i>
                            </button>
                          </p>
                          <Collapse in={open[i]}>
                            <textarea
                              className="form-control form-control-sm"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Separar las opciones con COMA ,"
                              defaultValue={c.opciones}
                              name={"S" + seccion + "_C" + i + "_TA"}
                              onBlur={cambios}
                            ></textarea>
                          </Collapse>
                        </div>
                      ) : (
                        <div className="mt-2">
                          <p className="m-auto">
                            <button
                              disabled
                              className="btn btn-secondary btn-sm w-100"
                              type="button"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                            >
                              LISTA
                            </button>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="card-footer ">
                      <small className="text-body-secondary d-flex justify-content-center">
                        <button
                          className="btn btn-danger btn-sm"
                          name={"borrar-seccion-" + seccion + "-campo-" + i}
                          onClick={eliminar_c}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </small>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>

          // <div
          //   className="col-3 col-xxl-2 mb-3"
          //   key={"S" + seccion + "_C" + i + c.titulo}
          // >
          //   <div className="card m-auto m-0 fondo-gris-campos border-1 border-secondary shadow bg-gradient">
          //     <div className="card-header">
          //       <div className="input-group input-group-sm border-0">
          //         <span
          //           className="input-group-text entradas"
          //           id="inputGroup-sizing-default"
          //         >
          //           C{i + 1}:
          //         </span>
          //         <input
          //           type="text"
          //           className="form-control"
          //           aria-label="Sizing example input"
          //           aria-describedby="inputGroup-sizing-default"
          //           defaultValue={c.titulo}
          //           name={"S" + seccion + "_C" + i + "_T"}
          //           onBlur={cambios}
          //         />
          //       </div>
          //     </div>
          //     <div className="card-body">
          //       <select
          //         className="form-select form-select-sm boder-0"
          //         defaultValue={c.tipo}
          //         name={"S" + seccion + "_C" + i + "_O"}
          //         onChange={cambios}
          //       >
          //         {options.map((o, i) => (
          //           <option value={o.value} key={i}>
          //             {o.label}
          //           </option>
          //         ))}
          //       </select>
          //       {c.tipo === "opciones" ? (
          //         <div className="mt-2">
          //           <p className="m-auto">
          //             <button
          //               className="btn buscar btn-sm w-100 border-0"
          //               type="button"
          //               data-bs-toggle="collapse"
          //               name={"abrir_" + i}
          //               onClick={(e) => Abrir(e)}
          //               aria-expanded={open[i]}
          //             >
          //               LISTA
          //               <i className="fa-solid fa-arrow-down fa-bounce fa-2xs ms-2"></i>
          //             </button>
          //           </p>
          //           <Collapse in={open[i]}>
          //             <textarea
          //               className="form-control form-control-sm"
          //               id="exampleFormControlTextarea1"
          //               rows="3"
          //               data-bs-toggle="tooltip"
          //               data-bs-html="true"
          //               title="Separar las opciones con COMA ,"
          //               defaultValue={c.opciones}
          //               name={"S" + seccion + "_C" + i + "_TA"}
          //               onBlur={cambios}
          //             ></textarea>
          //           </Collapse>
          //         </div>
          //       ) : (
          //         <div className="mt-2">
          //           <p className="m-auto">
          //             <button
          //               disabled
          //               className="btn btn-secondary btn-sm w-100"
          //               type="button"
          //               data-bs-toggle="collapse"
          //               aria-expanded="false"
          //             >
          //               LISTA
          //             </button>
          //           </p>
          //         </div>
          //       )}
          //     </div>
          //     <div className="card-footer ">
          //       <small className="text-body-secondary d-flex justify-content-center">
          //         {c.lock == true ? (
          //           <>
          //             <button
          //               className="btn btn-secundary btn-sm"
          //               disabled
          //             >
          //               <i class="fa-solid fa-lock"></i>
          //             </button>
          //           </>
          //         ) : (
          //           <>
          //             <button
          //               className="btn btn-danger btn-sm"
          //               name={"borrar-seccion-" + seccion + "-campo-" + i}
          //               onClick={eliminar_c}
          //             >
          //               <i className="fa-solid fa-trash-can"></i>
          //             </button>
          //           </>
          //         )}
          //       </small>
          //     </div>
          //   </div>
          // </div>
        ))
      )}
    </>
  );
};
