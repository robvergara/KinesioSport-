import { useContext } from "react";
import { FormsContext } from "../../context/forms.context";

import "./style.css";

export const PersonalData = ({ initialValues }) => {
  const { onRegret } = useContext(FormsContext);
  console.log("PACIENTE");
  console.log({ initialValues });
  return (
    <>
      <div className="mb-2">
        <form>
          {/* COMPOMENTE DE DATOS PERSONALES */}
          {/* <h3>Datos personales</h3> */}
          <div className="row">
            <label className="paciente col-12 mb-1 d-flex">
              <div className="flex-grow-1 ">
                {initialValues.apellido1} {initialValues.apellido2},{" "}
                {initialValues.nombre}{" "}
              </div>
              <p className="text-body-secondary">
                {initialValues.edad} años
              </p>
            </label>
            <label className="cedula col-12 d-flex">
              <strong className="me-3 paciente-titulo">Documento:</strong>{" "}
              <p className="text-body-secondary mb-1">
                {initialValues.cedula_tipo} - {initialValues.cedula_numero}
              </p>
            </label>
            <label className="cedula col-12 d-flex">
              <strong className="me-3 paciente-titulo">Nacimiento:</strong>{" "}
              <p className="text-body-secondary mb-1">
                {/* {new Date(initialValues.nacimiento)} */}
                {initialValues.nacimiento.split('T')[0]}
              </p>
            </label>
            <label className="cedula col-12 d-flex">
              <strong className="me-3 paciente-titulo">Dirección:</strong>{" "}
              <p className="text-body-secondary mb-1">
                {initialValues.direccion}
              </p>
            </label>
            <label className="cedula col-12 d-flex">
              <strong className="me-3 paciente-titulo">Entidad:</strong>{" "}
              <p className="text-body-secondary mb-1">
                {initialValues.entidad_id}
              </p>
            </label>
            <label className="cedula col-12 d-flex">
              <strong className="me-3 paciente-titulo">Familiar:</strong>{" "}
              <p className="text-body-secondary mb-1">
              {initialValues.parentezco} - {initialValues.familiar}
              </p>
            </label>
            <label className="cedula col-12 d-flex">
              <strong className="me-3 paciente-titulo">Contacto:</strong>{" "}
              <p className="text-body-secondary mb-1">
                {initialValues.familiar_celular}
              </p>
            </label>
          </div>
          {/* <div className="row">

            <div className="col-4 mb-3">
              <label >Primer apellido</label>
              <input 
                type="text"
                className="form-control" 
                name="apellido1"
                value={initialValues.apellido1}
                readOnly
              />

            </div>

            <div className="col-4 mb-3">
              <label >Segundo apellido</label>
              <input
              type="text" 
              className="form-control"  
              value={initialValues.apellido2}
              readOnly
              name="apellido2"
              />
            </div>

            <div className="col-4 mb-3">
              <label >Nombres </label>
              <input 
                type="text" 
                className="form-control"  
                value={initialValues.nombre}
                readOnly
                name="nombre"
              />
            </div>

            <div className="col-4 mb-3">
              <label>tipo de documento </label>
              <input
              type="text" 
              className="form-control" 
              name="cedula_tipo"
              value={initialValues.cedula_tipo}
              readOnly
              />
            </div>

            <div className="col-4 mb-3">
              <label>Documento </label>
              <input
              type="number" 
              className="form-control"  
              name="cedula_numero"
              value={initialValues.cedula_numero}
              readOnly
              />
            </div>
            
          </div> */}
        </form>

        {/* REGRESAR LOS FORMULARIOS */}
        {/* <button className="btn btn-outline-warning btn-light px-5 mb-3" onClick={onRegret}>
          atras
        </button> */}
      </div>
    </>
  );
};
