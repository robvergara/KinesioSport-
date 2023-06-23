import React from "react";
import { useEffect, useState } from "react";

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



export const VisorCampos = ({ campos, indice, id }) => {

  const [listOpen, setListOpen] = useState();

  useEffect(() => {
    setListOpen(false);
  }, []);


  //   console.log(campos);
  //   console.log(indice);
  //   console.log(id)
  // console.log(options)

  const handleViewList = () => {
    setListOpen(!listOpen);
  };

  return (
    <>
      {React.Children.toArray(
        campos.map((c, i) => (
          <div className="col-3 mb-3" key={c.titulo}>
            <div className="card m-auto m-0 popups border-0 shadow">
              <div className="card-header">
                <div className="input-group input-group-sm">
                  <span
                    className="input-group-text entradas"
                    id="inputGroup-sizing-default"
                  >
                    S{i + 1}:
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    defaultValue={c.titulo}
                    // onBlur={(e) =>
                    //   modNombreCampo(e.target.value, indice + "C" + i, e)
                    // }
                  />
                </div>
              </div>
              <div className="card-body">
                <SelectOptions
                  list={options}
                  value={c.tipo}
                  key={i}
                  campo={c.titulo}
                />
                {c.tipo === "opciones" && (
                  <>
                    <div className="mt-2">
                      <p className="m-auto">
                        <button
                          className="btn btn-primary btn-sm w-100"
                          type="button"
                          data-bs-toggle="collapse"
                          onClick={handleViewList}
                          // data-bs-target={"#" + index + "C" + i}
                          aria-expanded="false"
                          // aria-controls={index + "C" + i}
                        >
                          LISTA
                          <i className="fa-solid fa-arrow-down fa-bounce fa-2xs ms-2"></i>
                        </button>
                      </p>
                      <div className="collapse mt-2" isOpen={listOpen} toggleSidebar={handleViewList}>
                        <textarea
                          // key={index + "C" + i + c.titulo}
                          className="form-control form-control-sm"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Separar las opciones con COMA ,"
                          defaultValue={c.opciones}
                          // onBlur={(e) =>
                          //   modOpcion(e.target.value, index + "C" + i)
                          // }
                        ></textarea>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* <div className="card-body">
                <Select
                  size="md"
                  defaultValue={options.filter((options) => {
                    return options.value === c.tipo;
                  })}
                    onChange={(e) => modTipoCampo(e.value, index + "C" + i)}
                  options={options}
                />
                {c.tipo === "opciones" ? (
                  <div className="mt-2">
                    <p className="m-auto">
                      <button
                        className="btn btn-primary btn-sm w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        // data-bs-target={"#" + index + "C" + i}
                        aria-expanded="false"
                        // aria-controls={index + "C" + i}
                      >
                        LISTA
                        <i className="fa-solid fa-arrow-down fa-bounce fa-2xs ms-2"></i>
                      </button>
                    </p>
                    <div className="collapse mt-2" id={index + "C" + i}>
                      <textarea
                        // key={index + "C" + i + c.titulo}
                        className="form-control form-control-sm"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Separar las opciones con COMA ,"
                        defaultValue={c.opciones}
                        // onBlur={(e) =>
                        //   modOpcion(e.target.value, index + "C" + i)
                        // }
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="m-auto">
                     <button
                        disabled
                        className="btn btn-secondary btn-sm w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#" + index + "C" + i}
                        aria-expanded="false"
                        aria-controls={index + "C" + i}
                      >
                        LISTA
                      </button>
                    </p>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        ))
      )}
    </>
  );
};
