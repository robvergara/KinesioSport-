export const VisorNombre = ({ id, nombre, cambios, seccion }) => {
  return (
    <>
      <div className="col-12 d-flex">
        <div className="w-50 me-auto">
          <div className="input-group input-group-sm">
            <span
              className="input-group-text entradas fw-medium"
              id="basic-addon1"
            >
              Titulo:
            </span>
            <input
              type="text"
              className="form-control me-5 fondo-gris"
              name="nombre"
              id="nombre"
              onChange={cambios}
              placeholder="inserte un titulo"
              defaultValue={nombre}
              key={"Titulo_" + id}
            />
          </div>
        </div>
        <button
          className="btn btn-sm buscar fw-medium ms-5 me-2"
          name="add-seccion"
          onClick={seccion}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button className="btn btn-sm buscar fw-medium">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </>
  );
};
