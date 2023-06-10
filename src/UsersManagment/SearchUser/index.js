import { useState } from "react";
import { deleteUser, getUserByCedula } from "../../services/user.services";
import { ConfirmationModal } from "../../Modal/ConfirmationModal";
import { InfoModal } from "../../Modal/InfoModal";

import "./style.css";

export const SearchUser = () => {
  const [value, setValue] = useState();
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [res, setRes] = useState(null);

  const handleShow = () => setShow(true);

  const onSearch = async (e) => {
    // console.log(value)
    e.preventDefault();
    const res = await getUserByCedula(value);
    console.log(res);
    setUser(res);
  };

  const delUser = async (id) => {
    // e.preventDefault();
    console.log(id);
    const res = await deleteUser(id);
    res.message = "usuario eliminado con exito!";
    setRes(res);
    setShow(false);
    setShowModal(true);
    setTimeout(() => {
      setUser(null);
    }, 2000);
    // return res
  };

  const onRegret = (e) => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <>
      <div className="h-100 w-100">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid py-1 px-3 w-100">
            <div className="collapse navbar-collapse">
              <form onSubmit={onSearch} className="">
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="número de documento"
                    aria-label="Sizing example input"
                    name="cedula_numero"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button className="btn buscar bg-gradient" type="submit">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent">
                <li className="breadcrumb-item mini-titulo">Pablo</li>
                <li className="breadcrumb-item mini-titulo seccion">
                  Adminstrador
                </li>
              </ol>
              {/* <h6 class="font-weight-bolder mb-0">Usuarios</h6> */}
            </nav>
          </div>
        </nav>

        <div className="container-fluid py-4 ">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="fondo-kinesio bg-gradient shadow-primary border-radius-lg pt-4 pb-3 rounded-4">
                    <h6 className="text-white text-capitalize ps-3">
                      Usuarios
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2 bg-transparent">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Usuario
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Cedula
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Status
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Employed
                          </th>
                          <th class="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  class="avatar avatar-sm me-3 border-radius-lg"
                                  alt="user1"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">John Michael</h6>
                                <p class="text-xs text-secondary mb-0">
                                  john@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">Manager</p>
                            <p class="text-xs text-secondary mb-0">
                              Organization
                            </p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              23/04/18
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="javascript:;"
                              class="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        {!!user && !user.error && (
                          <>
                            <tr>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src="./kinesio-sinfondo.png"
                                      alt="mdo"
                                      width="24"
                                      height="24"
                                      className="avatar avatar-sm me-3 border-radius-lg"
                                    />
                                  </div>
                                  <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">
                                      {user.nombre} {user.apellido}
                                    </h6>
                                    {/* <p class="text-xs text-secondary mb-0">
                                      john@creative-tim.com
                                    </p> */}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h6 class="text-sm">{user.cedula}</h6>
                              </td>
                              <td>
                                <h6 class="text-sm">
                                  {user.status === 0
                                    ? "Super"
                                    : user.status === 1
                                    ? "Admin"
                                    : "medico"}
                                </h6>
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <form className="container-md h-100 d-flex border">
          <div className="m-auto row g-0 align-items-center">aaa</div>
        </form> */}

        <div className="d-flex flex-column p-5 border">
          {/* FORMULARIO DE BUSQUEDA DE USUARIO POR CEDULA */}
          <>
            {/* <form onSubmit={onSearch} className="mb-5">
              <h3 className="mb-3">Buscar usuario</h3>
              <div className="row">
                <div className=" mb-3">
                  <label>Documento </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="numedo de documento"
                    name="cedula_numero"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn-outline-warning mt-1" type="submit">
                buscar
              </button>
            </form> */}
          </>

          <>
            {/* DATOS DEL USUARIO ENCONTRADO */}
            {!!user && !user.error && (
              <>
                <div>
                  {/* <h3>Usuario encontrado</h3> */}
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Nombre del usuario:{" "}
                        <b>
                          {user.nombre} {user.apellido}
                        </b>
                      </h5>
                      <p>
                        numero de cedula: <b>{user.cedula}</b>
                      </p>
                      <p>
                        status:{" "}
                        <b>
                          {user.status === 0
                            ? "Super"
                            : user.status === 1
                            ? "Admin"
                            : "medico"}
                        </b>
                      </p>
                    </div>

                    <div className="text-center mb-3">
                      <button className="btn btn-outline-warning me-2">
                        editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={handleShow}
                      >
                        eliminar
                      </button>
                    </div>
                  </div>
                </div>

                {/* MODAL DE CONFIRMACION DE ESTADOS */}
                <ConfirmationModal
                  show={show}
                  setShow={setShow}
                  handleShow={handleShow}
                  deleteUser={delUser}
                  id={user._id}
                />

                <button
                  className="btn btn-outline-warning my-3"
                  onClick={onRegret}
                >
                  regresar
                </button>
                {res && (
                  <InfoModal
                    message={res.message}
                    show={showModal}
                    setShow={setShowModal}
                  />
                )}
              </>
            )}
            {!!user && user.error && (
              <>
                <h3>{user.message}</h3>

                <button
                  className="btn btn-outline-warning my-3"
                  onClick={onRegret}
                >
                  regresar
                </button>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};
