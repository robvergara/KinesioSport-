import React from "react";

export const RegisterPage = ()=>{
  return(
    <>
      <main class="shadow-box col-10 bg-secondary p-4">

        <button class="btn btn-outline-warning btn-light px-5 mb-3">
          Registrar
        </button>

        <div class="content-view container row bg-white h-auto p-4">

          <div class="row">

            <h3 class="my-4">Datos personales</h3>

            <div class="col-3 mb-3">
              <label >Primer apellido</label>
              <input type="text" readonly class="form-control"  placeholder="primer apellido" />
            </div>

            <div class="col-3 mb-3">
              <label >Segundo apellido</label>
              <input type="text" class="form-control"  placeholder="segundo apellido" />
            </div>

            <div class="col-3 mb-3">
              <label >Nombres </label>
              <input type="text" class="form-control"  placeholder="nombre completo" />
            </div>

            <div class="col-3 mb-3">
              <label for="floatingPlaintextInput">Tipo de documento </label>
              <select class="form-control" name="" id="">
                <option value="">seleccionar</option>
                <option value="">cedula de ciudadania</option>
                <option value="">cedula extranjera</option>
                <option value="">pasaporte extranjero</option>
              </select>
            </div>

            <div class="col-3 mb-3">
              <label>Documento </label>
              <input type="number" class="form-control" placeholder="numedo de ID" />
            </div>

            <div class="col-3 mb-3">
              <label>Fecha de Nacimiento </label>
              <input type="date" class="form-control"/>
            </div>

            <div class="col-3 mb-3">
              <label>edad </label>
              <input type="number" class="form-control"/>
            </div>

            <div class="col-3 mb-3">
              <label for="floatingPlaintextInput">Sexo </label>
              <select class="form-control" name="" id="">
                <option value="">seleccionar</option>
                <option value="">masculino</option>
                <option value="">femenino</option>
                <option value="">otro</option>
              </select>
            </div>

            <div class="col-3 mb-3">
              <label>direccion </label>
              <input type="text" class="form-control"/>
            </div>

            <div class="col-3 mb-3">
              <label>telefono </label>
              <input type="number" class="form-control"/>
            </div>

            <h3 class="my-4">Datos de contacto</h3>

            <div class="col-3 mb-3">
              <label >Contacto de emergencia </label>
              <input type="text" class="form-control"  placeholder="nombre completo" />
            </div>   
            
            <div class="col-3 mb-3">
              <label >parentesco </label>
              <input type="text" class="form-control"  placeholder="relación" />
            </div>

            <div class="col-3 mb-3">
              <label>telefono del contacto </label>
              <input type="number" class="form-control"/>
            </div>

            <h3 class="my-4">Datos administrativos</h3>

            <div class="col-3 mb-3">
              <label for="floatingPlaintextInput">entidad </label>
              <select class="form-control" name="" id="">
                <option value="">seleccionar</option>
                <option value="">Sura</option>
                <option value="">Salud Total</option>
                <option value="">mutualser</option>
                <option value="">Viva 1A</option>
                <option value="">otro</option>
              </select>
            </div>

            <div class="col-3 mb-3">
              <label for="floatingPlaintextInput">Medico remitente </label>
              <select class="form-control" name="" id="">
                <option value="">seleccionar</option>
                <option value="">Ariel</option>
                <option value="">Ajith</option>
                <option value="">Kumar</option>
              </select>
            </div>

            <div class="col-3 mb-3">
              <label>sesiones ordenadas </label>
              <input type="number" class="form-control"/>
            </div>

            <div class="col-3 mb-3">
              <label>lugar de la sesión </label>
              <input type="text" class="form-control"/>
            </div>

            <div>
              <label for="ordenMedica"> orden medica</label>
              <input type="file" class="form-control"/>
            </div>

          </div>

        </div>

      </main>
    </>
  )
}