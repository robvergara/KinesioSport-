import { useContext } from "react";
import { FormsContext } from "../../context/forms.context";
import { getPatientByCedula } from "../../services/register.services";

import "./style.css";

export const SearchPatient = () => {
  const { search, setSearch, setInitialValues } = useContext(FormsContext);

  const onSearch = async (e) => {
    e.preventDefault();
    const res = await getPatientByCedula(search);
    // console.log(res[0]);
    setInitialValues(res[0]);
  };
  return (
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
          <div className="input-group input-group-sm mb-3 me-3 col-6">
            <button className="btn bg-gradient buscar btn-sm" >
              <i className="fa-solid fa-user-plus my-auto"></i>
            </button>
          </div>
          {/* <div className="col-5 mb-3">
          <label>Documento </label>
          <input
          type="number" 
          className="form-control" 
          placeholder="numedo de documento" 
          name="cedula_numero"
          onChange={(e)=> setSearch(e.target.value)}
          />
        </div> */}

      </div>

      {/* <button className="btn btn-outline-warning mt-1" type="submit">
        buscar
      </button> */}
    </form>
  );
};
