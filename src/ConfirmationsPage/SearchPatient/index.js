import { useContext } from "react"
import { FormsContext } from "../../context/forms.context"
import { getPatientByCedula } from "../../services/register.services";


export const SearchPatient=()=>{
  const {search,setSearch,setInitialValues} = useContext(FormsContext);

  const onSearch= async(e)=>{
    e.preventDefault();
    const res = await getPatientByCedula(search);
    // console.log(res[0]);
    setInitialValues(res[0]);
  };
  return(
    <form onSubmit={onSearch}>

      <h3 className="mb-3">Buscar paciente</h3>
      <div className="row">

        <div className="col-5 mb-3">
          <label>Documento </label>
          <input
          type="number" 
          className="form-control" 
          placeholder="numedo de documento" 
          name="cedula_numero"
          onChange={(e)=> setSearch(e.target.value)}
          />
        </div>

      </div>

      <button
        className="btn btn-outline-warning mt-1" 
        type="submit"
      >
        buscar 
      </button>

    </form>
  )
}