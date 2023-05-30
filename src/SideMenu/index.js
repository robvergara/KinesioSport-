import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import "./style.css";

export const SideMenu = () => {
  const auth = useAuth();
  return (
    <>
      <div className="d-flex flex-column p-1 py-2 m-2 rounded-4 bg-dark bg-gradient menu shadow">
        {/* <img
          className="img-fluidF my-2 w-75 mx-auto d-block"
          src="./logo.png"
          alt=""
        /> */}
        <img
          className="img-fluidF my-2 w-25 mx-auto d-block"
          src="./kinesio-sinfondo.png"
          alt=""
        />
        <hr className="hr-text p-0 m-0" />
        <ul className="nav nav-pills flex-column mb-auto p-2">
          <li className="nav-item rounded-3 boton-menu">
            <NavLink
              className="nav-link align-item-center linkText m-1"
              to={`/`}
            >
              <i className="fa-solid fa-house me-2"></i> Inicio
            </NavLink>
          </li>
          <li className="nav-item rounded-3 boton-menu">
            <NavLink
              className="nav-link align-item-center linkText m-1"
              to={`/register`}
            >
              <i className="bi bi-person-plus-fill me-2"></i>
              Registro
            </NavLink>
          </li>
          <li className="nav-item rounded-3 boton-menu">
            <NavLink
              className="nav-link align-item-center linkText m-1"
              to={`/admission`}
            >
              <i className="bi bi-clipboard2-minus me-2"></i>
              Adminisiones
            </NavLink>
          </li>
          <li className="nav-item rounded-3 boton-menu">
            <NavLink
              className="nav-link align-item-center linkText m-1"
              to={`/`}
            >
              <i className="fa-solid fa-arrow-up-right-dots me-2"></i>
              Evoluciones
            </NavLink>
          </li>
          <li className="nav-item rounded-3 boton-menu fs-6">
            <NavLink
              className="nav-link align-item-center linkText m-1"
              to={`/eps`}
            >
              <i className="bi bi-hospital me-2"></i>
              EPS
            </NavLink>
          </li>
        </ul>
        <hr className="hr-text p-0 m-0" />
        <div className="dropdown btn btn-secondary bg-gradient rounded-4 p-1 d-flex bd-highlight align-middle">
          <p className="flex-grow-1 m-auto">Ariel</p>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-1 m-1 link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle"
            />
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Ariel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
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
          </ul>
        </div>
      </div>

      {/* <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary p-1 py-2">
        <button
          className="btn bnt-color-kine mb-auto mx-auto mt-1 text-center w-75 hamb"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="dropdown border-top">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-1 m-1 link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle"
            />
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
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
          </ul>
        </div>
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <img
              className="img-fluidF my-1 w-75 mx-auto d-block"
              src="./logo.png"
              alt=""
            />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link align-item-center linkText m-1"
                  to={`/`}
                >
                  <i className="fa-solid fa-house me-2"></i> Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link align-item-center linkText m-1"
                  to={`/register`}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link align-item-center linkText m-1"
                  to={`/admission`}
                >
                  <i className="bi bi-clipboard2-minus me-2"></i>
                  Adminisiones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link align-item-center linkText m-1"
                  to={`/`}
                >
                  <i className="fa-solid fa-arrow-up-right-dots me-2"></i>
                  Evoluciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link align-item-center linkText m-1"
                  to={`/eps`}
                >
                  <i className="bi bi-hospital me-2"></i>
                  EPS
                </NavLink>
              </li>
            </ul>
            <hr className=""></hr>
            <div className="">
              <h3>Ariel Navarro</h3>
            </div>
          </div>
        </div>
      </div> */}
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
