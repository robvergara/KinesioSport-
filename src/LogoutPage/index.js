import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";
import "./logout.css";

export function LogOutPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  const onCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (auth.user) {
    return (
      <>
        {auth.user.token && (
          <>
            <form onSubmit={logout} className="container-md h-100 d-flex">
              <div className="m-auto row g-0 align-items-center">
                <div className="card col-md-6 mb-5 mb-md-0 m-auto shadow z-index-0 fadeIn3 fadeInBottom">
                  <div className=" p-0 position-relative mt-n4 mx-3 z-index-2 g-transparent ">
                    <div className="bg-gradient shadow-primary border-radius-lg py-3 pe-1">
                      <div className="fondo-kinesio bg-gradient shadow-primary rounded-4 py-3 pe-1">
                        <h4 class="text-white font-weight-bolder text-center mt-2 mb-0 py-1">
                          Salir
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center fondo">
                    <img src="logo.png" className="w-100 my-5" alt="Logo" />
                    <div className="text-center pb-3">

                      <div className="row">
                        <div className="col-12">
                          <label className="col mb-4 form-label">
                            Seguro que quieres salir?
                          </label>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-center ">
                            <button
                              className="btn boton-si bg-gradient d-flex justify-content-center me-2"
                              type="submit"
                            >
                              <i className="fa-solid fa-check m-auto"></i>
                              <p className="m-auto mx-2">SI</p>
                            </button>
                            <button
                              className="btn bg-secondary bg-gradient d-flex d-flex justify-content-center align-item-center" 
                              onClick={onCancel}
                            >
                              <i className="fa-solid fa-xmark m-auto"></i>
                              <p className="m-auto mx-2">NO</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card-body text-center fondo">
                <img src="logo.png" className="w-100 my-4" alt="Logo" />
                <div className="row">
                  <div className="col-12">
                    <label class="form-label" for="form3Example2">
                      Usuario
                    </label>

                  </div>
                  <div className="col-12 mb-1">
                    <input
                      required={true}
                      className="form-control fondo-input"
                      placeholder="nombre de usuario"
                      name="usuario"
                      value={user.usuario}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mt-1">
                    <label class="form-label" for="form3Example2">
                      Contraseña
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      required={true}
                      type="password"
                      className="form-control fondo-input"
                      placeholder="********"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary mt-3 col-sm-6 mx-auto"
                      type="submit"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
            </form>
            {/* <form className="container text-center mb-4" onSubmit={logout}>
            <div className="d-flex align-items-center justify-content-center align-middle">
              <div className="card ingresar">
                <div className="card-header text-center">
                  SALIR
                </div>
                <div className="text-center pb-3">

                  <img src="logo.png" className="w-50 my-4" alt="Logo"/>

                  <div className="row">

                    <div className="col-12">
                      <label className="col mb-3">Seguro que quieres salir?</label>
                    </div>

                    <div className="col-12">
                      <div className="d-flex justify-content-center ">
                        <button className="btn btn-outline-warning d-flex justify-content-center" type="submit">

                            <i className="fa-solid fa-check"></i>
                            <p>SI</p>

                        </button>
                        <button className="btn btn-outline-secondary d-flex p-3 mx-3" onClick={onCancel}>

                            <i className="fa-solid fa-xmark "></i>
                            <p>NO</p>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form> */}
          </>
        )}
      </>
    );
  }
}
