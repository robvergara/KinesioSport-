import React from "react";
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary p-1 py-2">
        <button
          class="btn bnt-color-kine mb-auto mx-auto mt-1 text-center w-75 hamb"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div class="dropdown border-top">
          <a
            href="#"
            class="d-flex align-items-center justify-content-center p-1 m-1 link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
        <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <img
              className="img-fluidF my-1 w-75 mx-auto d-block"
              src="./logo.png"
              alt=""
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr className="mx-3"></hr>
          <div class="offcanvas-body d-flex flex-column">
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
                  <i class="fa-solid fa-arrow-up-right-dots me-2"></i>
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
            <div class="">
              <h3>Ariel Navarro</h3>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   {/* <div className="col-2 bg-white text-start p-3 "> */}
    //   {/* <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"> */}
    //   <div className="d-flex flex-column p-3 bg-body-tertiary">
    //     <img
    //       className="img-fluidF my-1 w-75 mx-auto d-block"
    //       src="./logo.png"
    //       alt=""
    //     />
    //     <hr></hr>
    //     <ul className="nav nav-pills flex-column mb-auto">
    //       <li className="nav-item">
    //         <NavLink className="nav-link d-flex align-item-center" to={`/`}>
    //           <i className="fa-solid fa-house me-2"></i> Inicio
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink
    //           className="nav-link d-flex align-item-center"
    //           to={`/register`}
    //         >
    //           <i className="bi bi-person-plus-fill me-2"></i>
    //           <p>registro pacientes</p>
    //         </NavLink>
    //       </li>
    //     </ul>

    //     <aside className="row h-75 px-3 d-flex flex-column justify-content-evenly">
    //       <div className="my-3">
    //         <NavLink className="nav-link d-flex align-item-center" to={`/`}>
    //           <i className="bi bi-house-door-fill me-2"></i>
    //           <p>Home</p>
    //         </NavLink>
    //       </div>

    //       <div className="my-3">
    //         <NavLink
    //           className="nav-link d-flex align-item-center"
    //           to={`/register`}
    //         >
    //           <i className="bi bi-person-plus-fill me-2"></i>
    //           <p>registro pacientes</p>
    //         </NavLink>
    //       </div>

    //       <div className="my-3">
    //         <NavLink
    //           className="nav-link d-flex align-item-center"
    //           to={`/admission`}
    //         >
    //           <i className="bi bi-clipboard2-minus me-2"></i>
    //           <p>admisiones</p>
    //         </NavLink>
    //       </div>
    //       {/* <div className="my-3">
    //         <NavLink className="nav-link d-flex align-item-center" to={`/`}>
    //          <i className="bi bi-file-earmark-medical me-2"></i>
    //          <p>valoraciones</p>
    //         </NavLink>
    //       </div>

    //       <div className="my-3">
    //         <NavLink className="nav-link d-flex align-item-center" to={`/`}>
    //          <i className="fa-solid fa-person-walking me-2"></i>
    //          <p>evoluciones</p>
    //         </NavLink>
    //       </div> */}

    //       <div className="my-3">
    //         <NavLink className="nav-link d-flex align-item-center" to={`/eps`}>
    //           <i className="bi bi-hospital me-2"></i>
    //           <p>EPS</p>
    //         </NavLink>
    //       </div>
    //     </aside>
    //   </div>
    // </>
  );
};
