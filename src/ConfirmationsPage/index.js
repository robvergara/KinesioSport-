import { useContext, useState } from "react";
import { FormsContext } from "../context/forms.context";
import { Histories } from "./Histories";
import { PersonalData } from "./PersonalData";
import { SearchPatient } from "./SearchPatient";

import { useAuth } from "../context/auth";
import { AdmissionModal } from "../Modal/AdmissionModal";
import { EditPersonalData } from "./EditPersonalData";
import { AppointmentSection } from "./AppointmentSection";

export const ConfirmationPage = () => {
  const auth = useAuth();
  const {
    initialValues,
    onAdmission,
    state,
    getTemplate,
    layout
  } = useContext(FormsContext);

  const [editPD, setEditPD] = useState(false);

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
                          : "Fisio"
                      }
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

                {/* SECCION DATOS PERSONALES */}

                <div className="col-12 pt-2 mb-4">
                  <div className="card border-0 shadow">
                    {/* CABECERA DE DATOS PERSONALES */}
                    <div className="card-header p-2 pt-3 border-0 bg-transparent">
                      <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                        <i className="fa-solid fa-hospital-user text-white m-3"></i>
                      </div>
                      {/* BOTON DE DATOS PERSONALES */}
                      <div className="text-end">
                        <div className="d-flex justify-content-end m-auto">
                          <p className="text-sm mb-0 text-capitalize text-body-tertiary me-3 align-self-center">
                            Datos personales
                          </p>
                          {initialValues &&
                            <button 
                              className="btn bg-gradient buscar"
                              disabled={!initialValues? "true" : ""} 
                              onClick={()=> setEditPD(true)}
                            >
                              <i class="fa-solid fa-pen-to-square my-auto"></i>
                              {/* <i className="fa-solid fa-user-plus my-auto"></i> */}
                            </button>
                          }
                        </div>
                      </div>

                    </div>

                    {/* COMPONENTE QUE MUESTRA LOS DATOS PERSONALES */}
                    <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
                      {initialValues
                        ?
                        !editPD
                          ?
                          <PersonalData initialValues={initialValues}/>
                          :
                          <EditPersonalData initialValues={initialValues} setEditPD={setEditPD} />
                        :
                        <></>
                      }
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3 h-100">

                  {/* SECCION HISTORIAL */}
                  <div className="card border-0 shadow">
                    {/* CABECERA DE LA SECCION */}
                    <div className="card-header p-2 pt-3 border-0 bg-transparent">
                      <div className="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                        <i className="fa-solid fa-file-medical text-white m-3"></i>
                      </div>
                      <div className="text-end">
                        {/* BOTON CREAR ADMISIONES */}
                        <div className="d-flex justify-content-end m-auto">
                          <p className="text-sm mb-0 text-capitalize text-body-tertiary me-3 align-self-center">
                            Admisiones
                          </p>
                          {initialValues &&

                            <button 
                              className="btn bg-gradient buscar" 
                              disabled={!initialValues? "true" : ""} 
                              onClick={()=> {onAdmission(); getTemplate()}}>

                              <i class="fa-solid fa-plus my-auto"></i>

                            </button>
                          }
                        </div>

                      </div>
                    </div>
                    <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
                      {initialValues && (
                        <>
                          <Histories />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECCION DE CITAS */}
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
                  {initialValues && (
                    <>
                      <AppointmentSection/>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          {/*  */}

        </div>
      </div>

      { layout && (
        <>
          <AdmissionModal
            show={state.admission}
          />
        </>
      )}

    </>
  );
};
