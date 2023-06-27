import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";

export const SideMenu = () => {
  const auth = useAuth();
  return (
    <>

        <div className="d-flex flex-column flex-shrink-0 p-0 m-2 rounded-4 bg-dark bg-gradient">
          <img
            className="img-fluidF mt-2 mb-0 w-25 mx-auto d-block"
            src="./kinesio-sinfondo.png"
            alt=""
          />
          <hr className="hr-text p-0 m-0" />
          <ul className="nav nav-pills flex-column mb-auto p-2 mt-0">
          {auth.user && (
            <>
              <li className="nav-item rounded-3 bnt-color-kine">
                <NavLink
                  className="nav-link align-item-center linkText m-1 boton-menu"
                  to={`/`}
                >
                  <i className="fa-solid fa-house me-2"></i> Inicio
                </NavLink>
              </li>
              {/* <li className="nav-item rounded-3 bnt-color-kine">
                <NavLink
                  className="nav-link align-item-center linkText m-1 boton-menu"
                  to={`/register`}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Registro
                </NavLink>
              </li> */}
              <li className="nav-item rounded-3 bnt-color-kine">
                <NavLink
                  className="nav-link align-item-center linkText m-1 boton-menu"
                  to={`/admission`}
                >
                  <i className="bi bi-clipboard2-minus me-2"></i>
                  Adminisiones
                </NavLink>
              </li>
              <li className="nav-item rounded-3 bnt-color-kine">
                <NavLink
                  className="nav-link align-item-center linkText m-1 boton-menu"
                  to={`/`}
                >
                  <i className="fa-solid fa-arrow-up-right-dots me-2"></i>
                  Evoluciones
                </NavLink>
              </li>
              <li className="nav-item rounded-3 bnt-color-kine">
                <NavLink
                  className="nav-link align-item-center linkText m-1 boton-menu"
                  to={`/eps`}
                >
                  <i className="bi bi-hospital me-2"></i>
                  EPS
                </NavLink>
              </li></>
            )}

          </ul>
          <hr className="hr-text p-0 m-0" />
          <div className="px-2 pb-2">
          <Dropdown>
            {auth.user && (

              <Dropdown.Toggle className="btn-secondary w-100 d-flex align-items-center rounded-4" >
              <p className="flex-grow-1 m-auto ">{auth.user.nombre}</p>
                <img
                  src="./kinesio-sinfondo.png"
                  alt="mdo"
                  width="24"
                  height="24"
                  className="rounded-circle"
                />

            </Dropdown.Toggle>
            )}
            {!auth.user && (

              <Dropdown.Toggle className="btn-secondary w-100 d-flex align-items-center rounded-4" >
                <p className="w-100 m-0">Ingresar</p>
                  <i
                    className="bi bi-person-circle rounded-circle"
                    alt="mdo"
                    width="24"
                    height="24"
                  ></i>
              </Dropdown.Toggle>
            )}

            <Dropdown.Menu className="dropdown-menu text-small shadow">
              {auth.user && (
                <>
                  {/* <li>
                    <NavLink className="dropdown-item" to={"/"}>
                      {auth.user.nombre}
                    </NavLink>
                  </li> */}
                  {auth.user.status === 0 && (
                    <>
                      <li>
                        <NavLink className="dropdown-item" to={"/users-managment"}>
                          Usuarios
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={"/templates"}>
                          Plantillas
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </>
              )}

              {loginRoutes.map((route) => {
                if (route.publicOnly && auth.user) return null; //PARA QUE NO SE RENDERICE EL LOGIN
                if (route.private && !auth.user) return null; // PARA QUE NO SE RENDERICE EL PERFIL YL EL LOGOUT SI NO HAY LOGIN

                return (
                  <>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={route.to}
                        key={route.to}
                      >
                        {route.text}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>

    </>
  );
};

const loginRoutes = [];
loginRoutes.push({
  to: "/login",
  text: "Login",
  private: false,
  publicOnly: true,
});
loginRoutes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});
