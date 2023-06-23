import { useContext, useEffect, useState } from "react";
import { PatientContext } from "../context/patients.context";
// import { EpsContext } from "../context/eps.context";
import { createAdmission } from "../services/admissions.services";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import { ModalContext } from "../context/modal.context";

export const RegisterForm = () => {
  const { onInfo } = useContext(ModalContext);
  const { onSave } = useContext(PatientContext);
  const [data, setData] = useState();

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    onSave(data);
    createAdmission(data);
    onInfo();
  };

  return (
    <form onSubmit={onSubmit} className='d-flex flex-column'>
      <h5>Datos personales</h5>
      <div className="row">
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                1er Apellido:
              </span>
              <input
                type="text"
                className="form-control"
                name="apellido1"
                id="apellido1"
                onChange={handleChange}
                placeholder="primer apellido"
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                2do Apellido:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="segundo apellido"
                name="apellido2"
                id="apellido2"
                onChange={handleChange1}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Nombre:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="nombre completo"
                name="nombre"
                id="nombre"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Tipo CC:
              </span>
              <select
                className="form-control"
                name="cedula_tipo"
                onChange={handleChange}
              >
                <option value="">seleccionar</option>
                <option value="cedula ciudadania">cedula de ciudadania</option>
                <option value="cedula extranjera">cedula extranjera</option>
                <option value="pasaporte">pasaporte extranjero</option>
              </select>
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Cedula:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="numedo de cedula"
                name="cedula_numero"
                id="cedula_numero"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Nacimiento:
              </span>
              <input
                type="date"
                className="form-control"
                name="nacimiento"
                id="nacimiento"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Edad:
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="edad"
                name="edad"
                id="edad"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Sexo:
              </span>
              <select
                className="form-control"
                name="sexo"
                onChange={handleChange}
              >
                <option value="">seleccionar</option>
                <option value="masculino">masculino</option>
                <option value="femenino">femenino</option>
                <option value="elle">otro</option>
              </select>
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Direccion:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="direccion"
                name="direccion"
                id="direccion"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Celular:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="celular"
                name="celular"
                id="celular"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
      </div>

      {/* <FormGroup className="mb-3">
        <FormLabel>Segundo apellido</FormLabel>
        <input
          type="text"
          className="mb-0 text-sm nombre"
          placeholder="segundo apellido"
          name="apellido2"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>Nombres </FormLabel>
        <input
          type="text"
          className="mb-0 text-sm nombre"
          placeholder="nombre completo"
          name="nombre"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>Tipo de documento </FormLabel>
        <select
          className="mb-0 text-sm nombre"
          name="cedula_tipo"
          onChange={handleChange}
        >
          <option value="">seleccionar</option>
          <option value="cedula ciudadania">cedula de ciudadania</option>
          <option value="cedula extranjera">cedula extranjera</option>
          <option value="pasaporte">pasaporte extranjero</option>
        </select>
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>Documento </FormLabel>
        <input
          type="number"
          className="mb-0 text-sm nombre"
          placeholder="numedo de ID"
          name="cedula_numero"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>Fecha de Nacimiento </FormLabel>
        <input
          type="date"
          className="mb-0 text-sm nombre"
          name="nacimiento"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>edad </FormLabel>
        <input
          type="number"
          className="mb-0 text-sm nombre"
          name="edad"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>Sexo </FormLabel>
        <select
          className="mb-0 text-sm nombre"
          name="sexo"
          onChange={handleChange}
        >
          <option value="">seleccionar</option>
          <option value="masculino">masculino</option>
          <option value="femenino">femenino</option>
          <option value="elle">otro</option>
        </select>
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>direccion </FormLabel>
        <input
          type="text"
          className="mb-0 text-sm nombre"
          name="direccion"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>telefono </FormLabel>
        <input
          type="number"
          className="mb-0 text-sm nombre"
          name="celular"
          onChange={handleChange}
        />
      </FormGroup> */}

      <h5>Datos de Emergencia</h5>
      <div className="row">
        <div className="col-12">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Contacto de emergencia:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="nombre completo"
                name="familiar"
                id="familiar"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Parentesco:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="relación"
                name="parentezco"
                id="parentezco"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup className="mb-3">
            <div className="input-group mb-3 input-group-sm">
              <span
                className="input-group-text entradas w-10 fw-medium"
                id="basic-addon1"
              >
                Parentesco:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="celular"
                name="familiar_celular"
                id="familiar_celular"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
        </div>
      </div>

      {/* <FormGroup className="mb-3">
        <FormLabel>Contacto de emergencia </FormLabel>
        <input
          type="text"
          className="mb-0 text-sm nombre"
          placeholder="nombre completo"
          name="familiar"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>parentesco </FormLabel>
        <input
          type="text"
          className="mb-0 text-sm nombre"
          placeholder="relación"
          name="parentezco"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* <FormGroup className="mb-3">
        <FormLabel>telefono del contacto </FormLabel>
        <input
          type="number"
          className="mb-0 text-sm nombre"
          name="familiar_celular"
          onChange={handleChange}
        />
      </FormGroup> */}

      {/* DATOS ADMINISTRATIVOS */}
      {/* <h3 className="my-4">Datos administrativos</h3>

      <FormGroup className="mb-3">
        <FormLabel>entidad </FormLabel>

        <select
          className='mb-0 text-sm nombre' 
          name="entidad_id" 
          onChange={handleChange}
        >
          <option value="none" key={0}>seleccionar</option>

          {eps && (
            <>
              {eps.map(item=>(
                <>
                  <option 
                    value={item._id}
                    key={item._id}
                  >
                    {item.nombre}
                  </option>
                </>
              ))}
            </>
          )}
        </select>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Medico remitente </FormLabel>
        <select className='mb-0 text-sm nombre' name="" id="">
          <option value="">seleccionar</option>
          <option value="">Ariel</option>
          <option value="">Ajith</option>
          <option value="">Kumar</option>
        </select>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>sesiones ordenadas </FormLabel>
        <input type="number" className='mb-0 text-sm nombre'/>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>lugar de la sesión </FormLabel>
        <input type="text" className='mb-0 text-sm nombre'/>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel> orden medica</FormLabel>
        <input type="file" className='mb-0 text-sm nombre'/>
      </FormGroup> */}

      <div className='text-center'> 
      <button type="submit" className="btn buscar w-25">
        Registrar
      </button>
      </div>
      
    </form>
  );
};
