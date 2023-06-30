import { useContext } from "react";
import { FormsContext } from "../../context/forms.context";
import { getPatientByCedula } from "../../services/register.services";

import "./style.css";
import { RegisterPatientModal } from "../../Modal/RegisterPatientModal";
import { ModalContext } from "../../context/modal.context";
import { useAuth } from "../../context/auth";

export const SearchPatient = () => {
  const { search, setSearch, setInitialValues } = useContext(FormsContext);
  const {state, onCreatePatient} = useContext(ModalContext);
  const auth = useAuth()


  const onSearch = async (e) => {
    e.preventDefault();
    // console.log(search)
    const res = await getPatientByCedula(search);
    // console.log(res);
    setInitialValues(res.find(patient => patient.cedula_numero === search));
  };
  return (
    <>
      <form onSubmit={onSearch} className="">
        {/* <h3 className="mb-3">Buscar paciente</h3> */}
        <div className="d-flex">
          
            <div className="input-group input-group-sm mb-3 me-3 col-4">
              <input
                type="number"
                className="form-control"
                placeholder="número de documento"
                aria-label="Sizing example input"
                name="cedula_numero"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn bg-gradient buscar" type="submit">
                Buscar
              </button>
            </div>

            {/* AGREGAR NUEVO PACIENTE */}
            {auth.user.status !== 2 && (
              <>
                <div className="input-group input-group-sm mb-3 me-3 col-6">
                  <button 
                    className="btn bg-gradient buscar btn-sm" 
                    onClick={onCreatePatient}
                  >

                    <i className="fa-solid fa-user-plus my-auto"></i>

                  </button>
                </div>
              </>
            )}

        </div>

      </form>

      <RegisterPatientModal
        show={state.createPatient}
      />
    </>
  );
};
