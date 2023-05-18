import React from "react";
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <>
      {/* <div className="col-2 bg-white text-start p-3 "> */}
      {/* <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"> */}
      <div className="d-flex flex-column p-3 bg-body-tertiary">
        <img
          className="img-fluidF my-1 w-75 mx-auto d-block"
          src="./logo.png"
          alt=""
        />
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-item-center" style={{color: 'green'}} to={`/`}>
              <i className="fa-solid fa-house me-2"></i> Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-item-center"
              to={`/register`}
            >
              <i className="bi bi-person-plus-fill me-2"></i>
              <p>registro pacientes</p>
            </NavLink>
          </li>
        </ul>

        <aside className="row h-75 px-3 d-flex flex-column justify-content-evenly">
          <div className="my-3">
            <NavLink className="nav-link d-flex align-item-center" to={`/`}>
              <i className="bi bi-house-door-fill me-2"></i>
              <p>Home</p>
            </NavLink>
          </div>

          <div className="my-3">
            <NavLink
              className="nav-link d-flex align-item-center"
              to={`/register`}
            >
              <i className="bi bi-person-plus-fill me-2"></i>
              <p>registro pacientes</p>
            </NavLink>
          </div>

          <div className="my-3">
            <NavLink
              className="nav-link d-flex align-item-center"
              to={`/admission`}
            >
              <i className="bi bi-clipboard2-minus me-2"></i>
              <p>admisiones</p>
            </NavLink>
          </div>
          {/* <div className="my-3">
            <NavLink className="nav-link d-flex align-item-center" to={`/`}>
             <i className="bi bi-file-earmark-medical me-2"></i> 
             <p>valoraciones</p>
            </NavLink>
          </div>

          <div className="my-3">
            <NavLink className="nav-link d-flex align-item-center" to={`/`}>
             <i className="fa-solid fa-person-walking me-2"></i> 
             <p>evoluciones</p>
            </NavLink>
          </div> */}

          <div className="my-3">
            <NavLink className="nav-link d-flex align-item-center" to={`/eps`}>
              <i className="bi bi-hospital me-2"></i>
              <p>EPS</p>
            </NavLink>
          </div>
        </aside>
      </div>
    </>
  );
};
