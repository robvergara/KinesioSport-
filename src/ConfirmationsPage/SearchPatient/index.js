import { useContext } from "react";
import { FormsContext } from "../../context/forms.context";
import { getPatientByCedula } from "../../services/register.services";

import './style.css'

export const SearchPatient = () => {
  const { search, setSearch, setInitialValues } = useContext(FormsContext);

  const onSearch = async (e) => {
    e.preventDefault();
    const res = await getPatientByCedula(search);
    // console.log(res[0]);
    setInitialValues(res[0]);
  };
  return (
    <form onSubmit={onSearch}>
      {/* <h3 className="mb-3">Buscar paciente</h3> */}
      <div className="row">
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
        <div className="input-group input-group-sm mb-3">
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
      </div>

      {/* <button className="btn btn-outline-warning mt-1" type="submit">
        buscar
      </button> */}
    </form>
  );
};
