import { useEffect, useState } from "react";
import React from "react";
import { VisorTitulo } from "./Titulo";
import { VisorNombre } from "./Nombre";
import { VisorSeccion } from "./Seccion";
import { updateTemplate } from "../../services/templates.services";

export const VisorForm = ({ formulario }) => {
  const [editor, setEditor] = useState();
  const [band_2, setBand_2] = useState();

  useEffect(() => {
    setEditor(formulario);
  }, [formulario]);

  const onSubmit = async (e) => {
    console.log(editor);
    let a = await updateTemplate(editor._id, editor);
  };

  const handleEdtiroChange = (e) => {
    const { name, value } = e.target;
    setEditor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // bandera_1()
  };

  const handleBodyChange = (e) => {
    const { name, value } = e.target;
    let body = editor.body;

    if (name.includes("C")) {
      const { name, value } = e.target;
      let [seccion, campo, tipo] = name.split("_");

      seccion = Number(seccion.replace("S", ""));
      campo = Number(campo.replace("C", ""));

      if (tipo === "T") {
        body[seccion].campos[campo].titulo = value;
      } else if (tipo === "O") {
        body[seccion].campos[campo].tipo = value;
      } else if (tipo === "TA") {
        body[seccion].campos[campo].opciones = value.split(",");
      }
    } else {
      const seccion = Number(name.replace("S", ""));
      body[seccion].titulo = value;
    }

    setEditor((prevState) => ({
      ...prevState,
      ["body"]: body,
    }));
    console.log(editor);
  };

  const addSeccion = (e) => {
    e.preventDefault();
    let body = [...editor.body];
    body.push({
      titulo: "Nueva seccion",
      campos: [],
    });

    setEditor((prevState) => ({
      ...prevState,
      ["body"]: body,
    }));
  };

  const addCampo = (e, i) => {
    e.preventDefault();
    const { name } = e.target;
    let seccion = Number(name.replace("add-campo-", ""));
    let body = [...editor.body];
    body[seccion].campos.push({
      titulo: "Agregar Titulo",
      tipo: "",
      opciones: [],
      valor: "",
    });

    setEditor((prevState) => ({
      ...prevState,
      ["body"]: body,
    }));
  };

  const deleteSeccion = (e, i) => {
    e.preventDefault();
    const { name } = e.target;

    let seccion = Number(name.replace("borrar-seccion-", ""));

    let body = [...editor.body];
    body = body.filter((n, i) => i !== seccion);

    setEditor((prevState) => ({
      ...prevState,
      ["body"]: body,
    }));
  };

  const deteleCampo = (e, i) => {
    e.preventDefault();
    const { name } = e.target;

    console.log(name.replace("borrar-seccion-", "").replace("-campo-", "_"));
    let [seccion, campo] = name
      .replace("borrar-seccion-", "")
      .replace("-campo-", "_")
      .split("_");
    seccion = Number(seccion);
    campo = Number(campo);

    let body = [...editor.body];
    let campos = body[seccion].campos.filter((n, i) => i !== campo);
    body[seccion].campos = campos;

    setEditor((prevState) => ({
      ...prevState,
      ["body"]: body,
    }));
  };

  return (
    <>
      {editor && (
        <>
          <div className="card-header p-2 pt-3 border-0 bg-transparent">
            <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
              <i className="fa-solid fa-newspaper text-white m-3"></i>
            </div>
            <div className="text-end">
              <VisorTitulo titulo={formulario.nombre} ha />
            </div>
            <div className="card-body p-2 pb-1 rounded border-0 bg-transparent">
              <form
                onSubmit={onSubmit}
                className="d-flex flex-column"
                key={"T_" + editor._id + "_F_"}
              >
                <div className="row">
                  <VisorNombre
                    nombre={editor.nombre}
                    id={editor._id}
                    cambios={handleEdtiroChange}
                    seccion={addSeccion}
                  />
                </div>
                <hr className="hr-text p-0 m-0" />
                <div className="col-12 row">
                  <VisorSeccion
                    body={editor.body}
                    id={editor._id}
                    cambios={handleBodyChange}
                    campo={addCampo}
                    elimniar_s={deleteSeccion}
                    eliminar_c={deteleCampo}
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};
