import React from "react";
import { NavLink } from "react-router-dom";

export const SideMenu =()=>{
  return(
    <>
      <div className="col-2 bg-white text-start aside-menu ">

        <img className="img-fluid my-3" src="../frontend/public/kinesioSportLogo.png" alt=""/>

        <aside className="row h-75 px-3 d-flex flex-column justify-content-evenly">

          <h5 className="my-3">
            <NavLink className="nav-link" to={`/`}> 
              <i className="bi bi-house-door-fill"></i> 
              <p>Home</p>
            </NavLink>
          </h5>

          <h5 className="my-3">
            <NavLink className="nav-link " to={`/register`}>
              <i className="bi bi-person-plus-fill"></i> 
              <p>registro pacientes</p>
            </NavLink>
          </h5>

          <h5 className="my-3">
            <NavLink className="nav-link" to={`/`}> 
              <i className="bi bi-clipboard2-minus"></i> 
              <p>ingresos</p>
            </NavLink>
          </h5>
          <h5 className="my-3">
            <NavLink className="nav-link" to={`/`}>
             <i className="bi bi-file-earmark-medical"></i> 
             <p>valoraciones</p>
            </NavLink>
          </h5>

          <h5 className="my-3">
            <NavLink className="nav-link" to={`/`}>
             <i className="fa-solid fa-person-walking"></i> 
             <p>evoluciones</p>
            </NavLink>
          </h5>

          <h5 className="my-3">
            <NavLink className="nav-link" to={`/eps`}> 
              <i className="bi bi-hospital"></i> 
              <p>EPS</p>
            </NavLink>
          </h5>
        </aside>

      </div>
    </>
  )
}