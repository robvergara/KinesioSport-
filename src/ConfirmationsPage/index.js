import { useContext } from "react";
import { Forms } from "./Forms";
import { FormsContext } from "../context/forms.context";
import { Histories } from "./Histories";
import { PersonalData } from "./PersonalData";
import { ButtonsFormSelect } from "./Forms/ButtonsFormSelect";
import { DinamicTabs } from "./Tabs";
import { TabContent, TabPane } from "reactstrap";
import { SearchPatient } from "./SearchPatient";

import { useAuth } from "../context/auth";

export const ConfirmationPage = () => {
  const auth = useAuth();
  const {
    initialValues,
  } = useContext(FormsContext);
  // console.log(dataTabs)

  return (
    <>
      <div className="w-100 overflow-auto p-0 m-0 d-flex flex-column mt-2">
        {/* <label>Administrador de Usuarios</label> */}

        <nav className="navbar navbar-expand-sm navbar-light p-0 m-0 mb-3">
          <div className="container-fluid py-1 ps-2 w-100">
            {/* BUSCADOR */}
            <div className="collapse navbar-collapse">
              {/* FORMULARIO DE BUSQUEDA DE PACIENTES POR CEDULA */}
              <SearchPatient />
            </div>
            {/* DATOS DE USUARIO INGRESADO */}
            {auth.user && (
              <>
                <nav aria-label="breadcrumb me-3">
                  <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item mini-titulo">
                      {auth.user.nombre}
                    </li>
                    <li className="breadcrumb-item mini-titulo seccion">
                      {auth.user.status === 0
                        ? "Super"
                        : auth.user.status === 1
                        ? "Admin"
                        : "Fisio"}
                    </li>
                  </ol>
                </nav>
              </>
            )}
          </div>
        </nav>
        <div className="row p-0 m-0 h-100 pb-3">
          <div className="col-5 p-0 m-0 h-100">
            <div className="container-fluid h-100">
              <div className="row">
                <div className="col-12 pt-2 mb-4">
                  <div className="card border-0 shadow">
                    <div className="card-header p-2 pt-3 border-0 bg-transparent">
                      <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                        <i className="fa-solid fa-hospital-user text-white m-3"></i>
                      </div>
                      <div className="text-end">
                        <div className="d-flex justify-content-end m-auto">
                          <p className="text-sm mb-0 text-capitalize text-body-tertiary me-3 align-self-center">
                            Datos personales
                          </p>
                          <button className="btn bg-gradient buscar">
                            <i class="fa-solid fa-pen-to-square my-auto"></i>
                            {/* <i className="fa-solid fa-user-plus my-auto"></i> */}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
                      <PersonalData initialValues={initialValues} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3 h-100">
                  <div className="card border-0 shadow">
                    <div className="card-header p-2 pt-3 border-0 bg-transparent">
                      <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                        <i className="fa-solid fa-file-medical text-white m-3"></i>
                      </div>
                      <div className="text-end">
                        <div className="d-flex justify-content-end m-auto">
                          <p className="text-sm mb-0 text-capitalize text-body-tertiary me-3 align-self-center">
                            Admisiones
                          </p>
                          <button className="btn bg-gradient buscar">

                            <i class="fa-solid fa-plus my-auto"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                    <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
                      {initialValues && (
                        <>
                          <Histories cedula={initialValues.cedula_numero} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 row p-0 m-0">
            <div className="container-fluid p-0 m-0">
              <div className="row h-100 p-0 m-0">
                <div className="col-12 pt-2 pe-3">
                  <div className="card border-0 shadow h-100 ">
                    <div className="card-header p-2 pt-3 border-0 bg-transparent">
                      <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                        <i class="fa-regular fa-rectangle-list text-white m-3"></i>
                      </div>
                      <div className="text-end">
                        <p className="text-sm mb-0 text-capitalize text-body-tertiary me-3">
                          Citas
                        </p>
                      </div>
                    </div>
                    <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
                      <PersonalData initialValues={initialValues} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
