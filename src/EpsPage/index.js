import React from "react";

export const EpsPage=()=>{
  return(
    <main className="shadow-box col-10 bg-secondary p-4">

      <button className="btn btn-outline-warning btn-light px-5 mb-3">
        Registrar
      </button>

      <div className="content-view container row bg-white h-auto p-4">

        <div className="row">

          <h3 className="my-4"> Ingresar nueva EPS</h3>

          <div className="col-3 mb-3">
            <label >Nombre</label>
            <input type="text" readonly className="form-control"  placeholder="nombre de la entidad " />
          </div>


          <div className="row">

            <h3 className="my-4"> buscar EPS </h3>

            <div className="col-3 mb-3">
              <label className="mb-2">Nombre de la entidad</label>
              <input type="text" className="form-control mb-3"  placeholder="nombre de la entidad" />
              <button className="btn btn-outline-warning" >buscar</button>
            </div>

            {/* <h4 className="my-4"> No Hay resultados disponibles </h4>  */}
            <div className="mb-4">

              <h4 className="my-4"> Tus resultados </h4>
              
              <div className="row">
                <h5 className="col-5 text-start">Entidad</h5>
                <h5 className="col-5 text-center">pacientes</h5>
              </div>

              <div className="row">

                <div className="col-5 text-start d-flex">

                  <div>
                    SURA
                  </div>
                </div>
                <div className="col-5 text-center  text-success">
                  <b>10</b> 
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}