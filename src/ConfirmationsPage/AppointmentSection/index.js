import { useContext } from "react"
import { PersonalData } from "../PersonalData"
import { FormsContext } from "../../context/forms.context"


export const AppointmentSection=()=>{

  const {initialValues} = useContext(FormsContext)
  return(
    <>
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
                    <PersonalData initialValues={initialValues} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}