import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";

export const SideMenu = () => {
  const auth = useAuth();
  return (
    <>
      {/* <aside className="navbar border-0 bg-gradient-dark me-0 pe-0 "> */}
        {/* <div className="d-flex flex-column p-1 py-2 m-2 rounded-4 bg-dark bg-gradient menu shadow"> */}
        {/* <div className="d-flex flex-column bg-dark bg-gradient rounded-4 h-100 mx-2"> */}
        <div className="d-flex flex-column flex-shrink-0 p-0 m-2 rounded-4 bg-dark bg-gradient">

        {/* sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps */}
          <img
            className="img-fluidF mt-2 mb-0 w-25 mx-auto d-block"
            src="./kinesio-sinfondo.png"
            alt=""
          />
          <hr className="hr-text p-0 m-0" />
          <ul className="nav nav-pills flex-column mb-auto p-2 mt-0">
            <li className="nav-item rounded-3 bnt-color-kine">
              <NavLink
                className="nav-link align-item-center linkText m-1 boton-menu"
                to={`/`}
              >
                <i className="fa-solid fa-house me-2"></i> Inicio
              </NavLink>
            </li>
            <li className="nav-item rounded-3 bnt-color-kine">
              <NavLink
                className="nav-link align-item-center linkText m-1 boton-menu"
                to={`/register`}
              >
                <i className="bi bi-person-plus-fill me-2"></i>
                Registro
              </NavLink>
            </li>
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
            </li>
          </ul>
          <hr className="hr-text p-0 m-0" />
          <div className="px-2 pb-2">
          <Dropdown>
            {auth.user && (
              // <Dropdown.Toggle className="btn btn-secondary bg-gradient rounded-4 p-3 d-flex bd-highlight align-middle mx-2 mb-2">
              //   <p className="flex-grow-1 m-auto ">{auth.user.nombre}</p>
              //     <img
              //       src="./kinesio-sinfondo.png"
              //       alt="mdo"
              //       width="24"
              //       height="24"
              //       className="rounded-circle"
              //     />

              // </Dropdown.Toggle>
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
              // <Dropdown.Toggle className="btn btn-secondary bg-gradient rounded-4 p-3 d-flex bd-highlight align-middle mx-2 mb-2 w-100">
              //   <p className="flex-grow-1 m-auto">Ingresar</p>
              //   {/* <a
              //     href={"/"}
              //     className="d-flex align-items-center justify-content-center p-1 m-1 link-body-emphasis text-decoration-none dropdown-toggle"
              //     data-bs-toggle="dropdown"
              //     aria-expanded="false"
              //   > */}
              //     <i
              //       className="bi bi-person-circle rounded-circle"
              //       alt="mdo"
              //       width="24"
              //       height="24"
              //     ></i>
              //   {/* </a> */}
              // </Dropdown.Toggle>
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
                  <li>
                    <NavLink className="dropdown-item" to={"/users-managment"}>
                      Usuarios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={"/"}>
                      Settings
                    </NavLink>
                  </li>
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
      {/* </aside> */}
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
