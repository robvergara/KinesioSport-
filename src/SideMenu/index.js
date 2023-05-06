import React from "react";

export const SideMenu =()=>{
  return(
    <>
      <div class="col-2 bg-white text-start aside-menu ">

        <img class="img-fluid my-3" src="../frontend/public/kinesioSportLogo.png" alt=""/>

        <aside class="row h-75 px-3 d-flex flex-column justify-content-evenly">
          <h5 class="my-3">
            <a class="nav-link" href="#"> <i class="bi bi-house-door-fill"></i> Home</a>
          </h5>
          <h5 class="my-3">
            <a class="nav-link " href="./registro_pacientes.html"> <i class="bi bi-person-plus-fill"></i> registro pacientes</a>
          </h5>
          <h5 class="my-3">
            <a class="nav-link" href="#"> <i class="bi bi-clipboard2-minus"></i> ingreso pacientes</a>
          </h5>
          <h5 class="my-3">
            <a class="nav-link" href="#"> <i class="bi bi-file-earmark-medical"></i> valoraciones</a>
          </h5>
          <h5 class="my-3">
            <a class="nav-link" href="#"> <i class="fa-solid fa-person-walking"></i> evoluciones</a>
          </h5>
          <h5 class="my-3">
            <a class="nav-link" href="./eps.html"> <i class="bi bi-hospital"></i> EPS</a>
          </h5>
        </aside>

      </div>
    </>
  )
}