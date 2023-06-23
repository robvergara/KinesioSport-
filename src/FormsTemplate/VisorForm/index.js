import { useEffect, useState } from "react";
import React from "react";
import { VisorTitulo } from "./Titulo";
import { VisorNombre } from "./Nombre";
import { VisorSeccion } from './Seccion';

export const VisorForm = ({ formulario }) => {
  const [editor, setEditor] = useState();

  useEffect(() => {
    setEditor(formulario);
  }, [formulario]);

  const onSubmit = (e) => {
    // e.preventDefault();
    // console.log(data);
    // onSave(data);
    // createAdmission(data);
    // onInfo();
  };

  const handleChange1 = (e) => {
    // const { name, value } = e.target;
    // setData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  //   console.log("HIJO");
  //   console.log(editor);

  //console.log(editor)

  return (
    <>
      {editor && (
        <>
          <div className="card-header p-2 pt-3 border-0 bg-transparent">
            <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
              <i className="fa-solid fa-newspaper text-white m-3"></i>
            </div>
            <div className="text-end">
              <VisorTitulo titulo={editor.nombre} />
            </div>
            <div className="card-body p-3 pb-2 rounded border-0 bg-transparent">
              <form
                onSubmit={onSubmit}
                className="d-flex flex-column"
                key={"T_" + editor._id + "_F_"}
              >
                <div className="row">
                  <VisorNombre nombre={editor.nombre} id={editor._id} />
                </div>
                <div className="col-12 row">
                  <VisorSeccion body={editor.body} id={editor._id}/>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {/* {editor && (
        <>
          <div key={"T_" + formulario._id}>
            <div className="card-header p-2 pt-3 border-0 bg-transparent">
              <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                <i className="fa-solid fa-newspaper text-white m-3"></i>
              </div>
              <div className="text-end">
                <div className="d-flex justify-content-end m-auto">
                  <p className="text-sm mb-0 text-body-tertiary me-3 align-self-center">
                    {editor.nombre}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
              <form
                onSubmit={onSubmit}
                className="d-flex flex-column"
                key={"T_" + formulario._id + "_F_"}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="input-group mb-3 input-group-sm w-50">
                      <span
                        className="input-group-text entradas w-10 fw-medium"
                        id="basic-addon1"
                      >
                        Titulo:
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="apellido1"
                        id="apellido1"
                        onChange={handleChange1}
                        placeholder="primer apellido"
                        defaultValue={editor.nombre}
                        key={"Titulo_" + formulario._id}
                      />
                      <button className="btn btn-sm buscar">Guardar</button>
                    </div>
                  </div>
                  <div className="col-12 row">
                    {editor.body.map((s, index) => (
                        <>
                            <div key={formulario._id + "_S_" + index}>a</div>
                        </>
                    ))}
                  </div>
                  <div className="col-12 row">
                    {editor.body.map((s, index) => (
                      <>
                        <div className="col-12">
                          <div
                            className="input-group mb-3 input-group-sm w-50"
                            key={editor._id + "_S." + index}
                          >
                            <span
                              className="input-group-text entradas w-10 fw-medium"
                              id="basic-addon1"
                            >
                              Seccion {index + 1}:
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              name="apellido1"
                              id="apellido1"
                              onChange={handleChange1}
                              placeholder="primer apellido"
                              defaultValue={s.titulo}
                            />
                            <button className="btn buscar">add</button>
                          </div>
                        </div>
                        <CamposForm
                          campos={s.campos}
                          indice={editor._id + "_seccion_" + index}
                          key={index}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};
