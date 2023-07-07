import { useContext } from "react";
import { FormsContext } from "../../context/forms.context";
import { updatePatient } from "../../services/register.services";
import { ModalContext } from "../../context/modal.context";
import { InfoModal } from "../../Modal/InfoModal";

export const EditPersonalData = ({ setEditPD }) => {
  const { initialValues, setInitialValues } = useContext(FormsContext);
  const { onInfo, state, onRegretModal } = useContext(ModalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(initialValues);
    const res = await updatePatient(initialValues._id, initialValues);
    console.log(res);
    onInfo();

    setTimeout(() => {
      onRegretModal();
      setEditPD(false);
    }, 1500);
  };
  return (
    <>
      <form className="mb-2" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                1er Apellido:
              </span>
              <input
                type="text"
                className="form-control"
                name="apellido1"
                placeholder={initialValues.apellido1}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                2do Apellido:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={initialValues.apellido2}
                onChange={handleChange}
                name="apellido2"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Nombres:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={initialValues.nombre}
                onChange={handleChange}
                name="nombre"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-25 fw-medium"
                id="basic-addon1"
              >
                Tipo CC:
              </span>
              <select
                className="form-control"
                name="cedula_tipo"
                onChange={handleChange}
                defaultValue={initialValues.cedula_tipo}
              >
                <option value="">seleccionar</option>
                <option value="CEDULA CIUDADANIA">Cedula de ciudadania</option>
                <option value="CEDULA EXTRANJERIA">Cedula extranjera</option>
                <option value="PASAPORTE">Pasaporte extranjero</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Documento:
              </span>
              <input
                type="number"
                className="form-control"
                name="cedula_numero"
                placeholder={initialValues.cedula_numero}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Nacimiento:
              </span>
              <input
                type="date"
                className="form-control"
                name="nacimiento"
                id="nacimiento"
                defaultValue={initialValues.nacimiento.split("T")[0]}
                // placeholder={initialValues.nacimiento.split('T')[0]}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Direccion:
              </span>
              <input
                type="text"
                className="form-control"
                name="direccion"
                placeholder={initialValues.direccion}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Contacto:
              </span>
              <input
                type="number"
                className="form-control"
                name="celular"
                placeholder={initialValues.celular}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Familiar:
              </span>
              <input
                type="text"
                className="form-control"
                name="familiar"
                placeholder={initialValues.familiar}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Parentesco:
              </span>
              <input
                type="number"
                className="form-control"
                name="parentezco"
                placeholder={initialValues.parentezco}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Parentesco:
              </span>
              <input
                type="number"
                className="form-control"
                name="parentezco"
                placeholder={initialValues.parentezco}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas fw-medium w-25"
                id="basic-addon1"
              >
                Contacto:
              </span>
              <input
                type="number"
                className="form-control"
                name="familiar_celular"
                placeholder={initialValues.familiar_celular}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* BOTONES DE ACCION */}
        <div className="row text-center">
          <div className="col-6">
            <button className="btn buscar px-5 mb-3 btn-sm" type="submit">
              Actualizar
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn buscar px-5 mb-3 btn-sm"
              onClick={() => setEditPD(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
        {/* <button
          className="btn btn-outline-warning btn-light px-5 mb-3"
          type="submit"
        >
          editar
        </button>
        <button
          className="btn btn-outline-warning btn-light px-5 mb-3"
          onClick={() => setEditPD(false)}
        >
          atras
        </button> */}
      </form>

      <InfoModal
        show={state.info}
        message={"Paciente actualizado!"}
        onRegret={onRegretModal}
      />
    </>
  );
};
