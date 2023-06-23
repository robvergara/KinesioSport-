export const VisorNombre = ({ id, nombre }) => {
  const handleChange1 = (e) => {
    // const { name, value } = e.target;
    // setData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  return (
    <>
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
            defaultValue={nombre}
            key={"Titulo_" + id}
          />
          <button className="btn btn-sm buscar">Guardar</button>
        </div>
      </div>
    </>
  );
};
