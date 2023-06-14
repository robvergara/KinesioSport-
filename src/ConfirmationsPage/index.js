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
    state,
    layout,
    initialValues,
    onSubmit,
    onBack,
    activeTab,
    dataTabs,
  } = useContext(FormsContext);
  // console.log(dataTabs)

  return (
    <>
      <div className="my-2 w-100 overflow-auto p-0 m-0 d-flex flex-column">
        {/* <label>Administrador de Usuarios</label> */}

        <nav className="navbar navbar-expand-sm navbar-light  p-0 m-0">
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

        <div className="row p-0 m-0">
          <div className="h-100 w-100 p-0 m-0">
            <div className="col-4">
              <div className="container-fluid py-4">
                <div className="row">
                  <div className="col-12">
                    <div className="card my-3 border-0 shadow">
                      <div class="card-header p-2 pt-3 border-0 bg-transparent">
                        <div class="fondo-kinesio text-center border-radius-xl mt-n4 position-absolute rounded-3 shadow ms-3 ">
                          <i class="fa-solid fa-hospital-user text-white m-3"></i>
                        </div>
                        <div class="text-end">
                          <p class="text-sm mb-0 text-capitalize text-body-tertiary me-3">
                            Datos personales
                          </p>
                        </div>
                      </div>
                      {/* <hr className="hr-text p-0 m-0" /> */}
                      <div className="card-body p-3 pb-2 shadow rounded border-0 bg-transparent">
                        {initialValues && (
                          <>
                            <PersonalData initialValues={initialValues} />
                          </>
                        )}
                      </div>
                    </div>
                    {/* algo */}
                    {/* <div className="card my-3 border-0">
                      <div className="card-header p-3 position-relative mt-n4 mx-3 z-index-2 bg-transparent border-0">
                        <div className="fondo-kinesio shadow-primary border-radius-lg pt-4 pb-3 rounded-3 shadow">
                          <h6 className="text-white text-capitalize ps-3">
                            Usuarios
                          </h6>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // return(
  //   <>
  //     <main className="shadow-box col-10 bg-secondary p-4">

  //       {/* PESTAÑAS DINAMICAS DE LA SECCION */}
  //       <DinamicTabs/>

  //       {/* PESTAÑA DE INICIO DE LA SECCION ADMISIONES. NUNCA SE CIERRA */}
  //       <TabContent activeTab={activeTab}>
  //         <TabPane tabId="main">

  //           {/* BOTON PARA REGRESAR A LA BARRA DE BUSQUEDA POR CEDULA */}
  //           <div className="content-view container row bg-white h-auto p-4">
  //             {initialValues && (
  //               <button className="col-3 btn btn-outline-warning btn-light px-5 my-3" onClick={onBack}>
  //                 regresar busqueda
  //               </button>
  //             )}

  //             <div className="row">
  //               {!initialValues && (

  //                 //FORMULARIO DE BUSQUEDA DE PACIENTES POR CEDULA
  //                 <SearchPatient/>

  //               )}

  //               {initialValues && (
  //                 <>
  //                   <div className="col-6">

  //                     {/* COMPONENTE QUE MUESTRA LOS DATOS PERSONALES DE LA PERSONA AL MOMENTO DE HACER LA BUSQUEDA */}
  //                     <PersonalData initialValues={initialValues}/>

  //                     {/* COMPONENTE QUE MUESTRA LAS HISTORIAS QUE TIENE LA PERSONA. SI LE DA CLICK A UN COMPONENTE SE ABRE UNA PESTAÑA NUEVA PARA VER CADA HISTORIA */}
  //                     <Histories cedula={initialValues.cedula_numero} />

  //                   </div>

  //                   <div className="col-6">

  //                     {/* SELECCION DE FORMULARIOS */}
  //                     <ButtonsFormSelect/>

  //                     {/* RENDERIZADO DEL FORMULARIO SEGUN EL BOTON QUE SE ESCOGIO */}
  //                     {layout && (

  //                     <form onSubmit={onSubmit}>

  //                       {(state.admission || state.evaluation || state.valoration === true) && (
  //                         <>
  //                           {/* COMPONENTE QUE RENDERIZA EL FORMULARIO DE ACUERDO AL JSON ESTIPULADO EN EL BACKEND QUE SE LE ENVIA EN EL ATRIBUTO "LAYOUT" */}
  //                           <Forms layout={layout} />
  //                           <button className="btn btn-outline-warning" type="submit">
  //                             guardar
  //                           </button>
  //                         </>
  //                       )}

  //                     </form>
  //                     )}
  //                   </div>
  //                 </>
  //               )}
  //             </div>

  //           </div>
  //         </TabPane>
  //       </TabContent>

  //       {/* CREACION DE LOS CUERPOS DE LAS PESTAÑAS DINAMICAS */}
  //       {dataTabs ? dataTabs.map((tab)=>(
  //         <>
  //           <TabContent activeTab={activeTab}>
  //             <TabPane tabId={tab._id}>

  //               <div className="container bg-white">
  //                 <Forms layout={tab} />
  //               </div>

  //             </TabPane>
  //           </TabContent>
  //         </>
  //       ))
  //       :<></>}

  //     </main>
  //   </>
  // )
};
