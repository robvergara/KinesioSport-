import React from "react"

export const HomePage =()=>{

  return(
    <>
      <main class="shadow-box col-10 bg-secondary p-4">

        <button class="btn btn-outline-warning btn-light px-5 mb-3">
          Salir
        </button>

        <div class="content-view container row bg-white h-auto">
          <h3 class="mb-4 mt-3">Bienvenido User</h3>

          <div class="row mb-3">
            <div class="row">
              <h5 class="col-5 text-start text-warning">Pacientes programados</h5>
              <h5 class="col-5 text-center text-warning">estado</h5>
            </div>

            <div>

              <div class="row mb-2">

                <div class="col-5 text-start d-flex">
                  <p class="mx-2">
                    <b>8:00</b>
                  </p>
                  <p>
                    Pablo Dos Santos
                  </p>
                </div>
                <p class="col-5 text-center text-success">
                  <b>confirmado</b> 
                </p>

              </div>

              <div class="row mb-2">

                <div class="col-5 text-start d-flex">
                  <p class="mx-2">
                    <b>8:20</b>
                  </p>
                  <p>
                    Robert Vergara
                  </p>
                </div>
                <p class="col-5 text-center text-secondary">
                  <b>por confirmar</b> 
                </p>

              </div>

            </div>
          </div>  
        </div>

      </main>
    </>
  )
}