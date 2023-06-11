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
              <div className="card my-3 border-0">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent border-0">
                  <div className="fondo-kinesio shadow-primary border-radius-lg pt-4 pb-3 rounded-3 shadow shadow">
                    <h6 className="text-white text-capitalize ps-3">
                      Usuarios
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2 bg-transparent shadow rounded border-0">
                  <div className="table-responsive p-0 border-0">
                    <table className="table align-items-center mb-0 border-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase ps-3 w-50">Usuario</th>
                          <th className="text-uppercase ps-2 w-25">Cedula</th>
                          <th className="text-center text-uppercase w-10">
                            Status
                          </th>
                          <th className="text-center text-uppercase w-10">
                           
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-0">
                        {!!user && !user.error && (
                          <>
                            <tr className="border-0">
                              <td className="border-0">
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
                                  <div className="d-flex flex-column justify-content-center">
                                    <p className="mb-0 text-sm nombre">
                                      {user.nombre} {user.apellido}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="d-flex align-items-center border-0">
                                <div className="d-flex py-1 ">
                                  <div className="d-flex flex-column justify-content-center">
                                    <p className="mb-0 text-sm cedula">
                                      {user.cedula}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle text-center text-sm border-0">
                                {/* <span class="badge badge-sm bg-success master">Online</span> */}
                                {/* <div className="d-flex d-flex py-1"> */}
                                {user.status === 0 ? (
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center master bg-gradient">
                                    MASTER
                                  </span>
                                ) : user.status === 1 ? (
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center admin bg-gradient">
                                    ADMIN
                                  </span>
                                ) : (
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center fisio bg-gradient">
                                    FISIO
                                  </span>
                                )}
                              </td>
                              <td className="align-middle text-center border-0">
                                <div className="d-flex px-2 justify-content-center">
                                  <div className="d-flex flex-column justify-content-center">
                                    <button className="btn btn-primary btn-sm me-2 my-0">
                                      <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm my-0"
                                      onClick={handleShow}
                                    >
                                      <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                  </div>
                                </div>
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
