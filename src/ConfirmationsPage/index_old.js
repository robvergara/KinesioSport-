import { useContext } from "react"
import { Forms } from "./Forms";
import { FormsContext } from "../context/forms.context";
import { Histories } from "./Histories";
import { PersonalData } from "./PersonalData";
import { ButtonsFormSelect } from "./Forms/ButtonsFormSelect";
import { DinamicTabs } from "./Tabs";
import {TabContent, TabPane} from 'reactstrap'
import { SearchPatient } from "./SearchPatient";


export const ConfirmationPage=()=>{
  const {
    state,
    layout,
    initialValues, 
    onSubmit,
    onBack,
    activeTab,
    dataTabs

  } = useContext(FormsContext)
  // console.log(dataTabs)

  return(
    <>
      <main className="shadow-box col-10 bg-secondary p-4">

        {/* PESTAÑAS DINAMICAS DE LA SECCION */}
        <DinamicTabs/>  

        {/* PESTAÑA DE INICIO DE LA SECCION ADMISIONES. NUNCA SE CIERRA */}
        <TabContent activeTab={activeTab}>
          <TabPane tabId="main">

            {/* BOTON PARA REGRESAR A LA BARRA DE BUSQUEDA POR CEDULA */}
            <div className="content-view container row bg-white h-auto p-4">
              {initialValues && (
                <button className="col-3 btn btn-outline-warning btn-light px-5 my-3" onClick={onBack}>
                  regresar busqueda
                </button>
              )}

              
              <div className="row">
                {!initialValues && (

                  //FORMULARIO DE BUSQUEDA DE PACIENTES POR CEDULA
                  <SearchPatient/>

                )}

                {initialValues && (
                  <>
                    <div className="col-6">

                      {/* COMPONENTE QUE MUESTRA LOS DATOS PERSONALES DE LA PERSONA AL MOMENTO DE HACER LA BUSQUEDA */}
                      <PersonalData initialValues={initialValues}/>

                      {/* COMPONENTE QUE MUESTRA LAS HISTORIAS QUE TIENE LA PERSONA. SI LE DA CLICK A UN COMPONENTE SE ABRE UNA PESTAÑA NUEVA PARA VER CADA HISTORIA */}
                      <Histories cedula={initialValues.cedula_numero} />

                    </div>
                    

                    <div className="col-6">

                      {/* SELECCION DE FORMULARIOS */}
                      <ButtonsFormSelect/>

                      {/* RENDERIZADO DEL FORMULARIO SEGUN EL BOTON QUE SE ESCOGIO */}
                      {layout && (

                      <form onSubmit={onSubmit}>

                        {(state.admission || state.evaluation || state.valoration === true) && (
                          <>
                            {/* COMPONENTE QUE RENDERIZA EL FORMULARIO DE ACUERDO AL JSON ESTIPULADO EN EL BACKEND QUE SE LE ENVIA EN EL ATRIBUTO "LAYOUT" */}
                            <Forms layout={layout} />
                            <button className="btn btn-outline-warning" type="submit">
                              guardar
                            </button>
                          </>
                        )}

                      </form>
                      )}
                    </div>
                  </>
                )}
              </div>
              
            </div>
          </TabPane>
        </TabContent>

        {/* CREACION DE LOS CUERPOS DE LAS PESTAÑAS DINAMICAS */}
        {dataTabs ? dataTabs.map((tab)=>(
          <>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={tab._id}>

                <div className="container bg-white">
                  <Forms layout={tab} />
                </div>

              </TabPane>
            </TabContent>
          </>
        ))
        :<></>}

      </main>
    </>
  )
}
