import { useState } from "react";
import { createUser } from "../../services/user.services";
import { InfoModal } from "../../Modal/InfoModal";

export const CreateUser = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [res, setRes] = useState(null);

  const userHandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showForm = () => {
    setRes(null);
    setShow(true);
  };
  const closeForm = () => {
    setShow(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!user.status) {
      const res = {};
      res.message = "por favor ingrese el status del nuevo usuario";
      setRes(res);
      setShowModal(true);
      return;
    }

    const res = await createUser(user);
    console.log(res);

    if (!res.error) {
      res.message = "usuario creado satisfactoriamente";
      // console.log(res.message)
      setRes(res);
      setShowModal(true);

      setTimeout(() => {
        // closeForm()
        // setUser(null)
        window.location.reload();
      }, 1000);
    }

    setRes(res);
    setShowModal(true);
  };

  return (
    <>
      <div className="h-100 w-100">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-3 border-0">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent border-0">
                  <div className="fondo-kinesio shadow-primary border-radius-lg pt-4 pb-3 rounded-3 shadow shadow">
                    <h6 className="text-white text-capitalize ps-3">
                      Crear Usuario
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2 bg-transparent shadow rounded border-0">
                  <form className="row p-3" onSubmit={onSubmit}>
                    <div class="input-group input-group-sm mb-3">
                      <span
                        class="input-group-text w-25"
                        id="inputGroup-sizing-sm"
                      >
                        Nombre
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        name="nombre"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={userHandleChange}
                        required
                      />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                      <span
                        class="input-group-text w-25"
                        id="inputGroup-sizing-sm"
                      >
                        Apellido
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        name="apellido"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={userHandleChange}
                        required
                      />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                      <span
                        class="input-group-text w-25"
                        id="inputGroup-sizing-sm"
                      >
                        Cédula
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        name="cedula"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={userHandleChange}
                        required
                      />
                    </div>
                    {/* <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text w-30" id="inputGroup-sizing-sm">
                        Usuario
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        name="usuario"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={userHandleChange}
                        required
                      />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text w-30" id="inputGroup-sizing-sm">
                        Contraseña
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        name="usuario"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={userHandleChange}
                        required
                      />
                    </div> */}
                    <div class="input-group input-group-sm mb-3">
                      <span
                        class="input-group-text w-25"
                        id="inputGroup-sizing-sm"
                      >
                        Status
                      </span>
                      <select
                        className="form-control"
                        name="status"
                        onChange={userHandleChange}
                        required
                      >
                        <option defaultValue>seleccionar</option>

                        {roles.map((rol) => (
                          <option value={rol.value} key={rol.value}>
                            {rol.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* <div className="col-4 mb-3 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={userHandleChange}
                        required
                      />
                    </div> */}

                    {/* <div className="col-4 mb-3 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        name="apellido"
                        onChange={userHandleChange}
                        required
                      />
                    </div> */}

                    {/* <div className="col-4 mb-3 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No documento"
                        name="cedula"
                        onChange={userHandleChange}
                        required
                      />
                    </div> */}

                    {/* <div className="col-4 mb-3 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        name="usuario"
                        onChange={userHandleChange}
                        required
                      />
                    </div> */}

                    {/* <div className="col-4 mb-3 ">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="contrasena"
                        onChange={userHandleChange}
                        required
                      />
                    </div> */}

                    {/* <div className="col-4 mb-3 ">
                      <select
                        className="form-control"
                        name="status"
                        onChange={userHandleChange}
                        required
                      >
                        <option defaultValue>seleccionar</option>

                        {roles.map((rol) => (
                          <option value={rol.value} key={rol.value}>
                            {rol.name}
                          </option>
                        ))}
                      </select>
                    </div> */}

                    <div className="align-middle text-center border-0">
                      <button
                        className="col-3 btn buscar font-weight-bold"
                        type="submit"
                      >
                        Crear
                      </button>
                    </div>
                  </form>

                  {res && (
                    <InfoModal
                      message={res.message}
                      show={showModal}
                      setShow={setShowModal}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column p-5">
        {!show && (
          <div className="row">
            <button
              className="col-4 btn btn-outline-warning"
              onClick={showForm}
            >
              Crear usuario
            </button>
          </div>
        )}

        {show && (
          <>
            <div className="row">
              <button className="col-4 btn btn-outline-warning" onClick={closeForm}>regresar</button>
            </div>

            <h3 className="form-title mt-5">Ingresar nuevo usuario</h3>

            <form className="row p-3" onSubmit={onSubmit}>
              <div className="col-4 mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={userHandleChange}
                  required
                />
              </div>

              <div className="col-4 mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="apellido"
                  onChange={userHandleChange}
                  required
                />
              </div>

              <div className="col-4 mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="No documento"
                  name="cedula"
                  onChange={userHandleChange}
                  required
                />
              </div>

              <div className="col-4 mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de usuario"
                  name="usuario"
                  onChange={userHandleChange}
                  required
                />
              </div>

              <div className="col-4 mb-3 ">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="contrasena"
                  onChange={userHandleChange}
                  required
                />
              </div>

              <div className="col-4 mb-3 ">
                <select
                  className="form-control"
                  name="status"
                  onChange={userHandleChange}
                  required
                >
                  <option defaultValue>seleccionar</option>

                  {roles.map((rol) => (
                    <option value={rol.value} key={rol.value}>
                      {rol.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="row">
                <button className="col-3 btn btn-outline-warning" type="submit">
                  crear usuario
                </button>

                <button
                  className="col-3 btn btn-outline-warning ms-2"
                  onClick={closeForm}
                >
                  regresar
                </button>
              </div>
            </form>

            {res && (
              <InfoModal
                message={res.message}
                show={showModal}
                setShow={setShowModal}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

const roles = [
  { name: "super", value: 0 },
  { name: "admin", value: 1 },
  { name: "fisio", value: 2 },
];
