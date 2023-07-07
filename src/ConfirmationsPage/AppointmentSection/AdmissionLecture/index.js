export const AdmissionLecture = ({ layout }) => {
  return (
    <>
      <div className="card mt-0 mb-2">
        <div className="card-header px-3 py-1 citas-admision-header">
          <div className="d-flex my-1">
            <div className="flex-grow-1 align-self-center">
              {layout.body[0].campos[0].valor}
            </div>
            <div className="align-self-center">
              {layout.valor && (
                <>$ {Number(layout.valor).toLocaleString("es-MX")}</>
              )}
            </div>
            <div className="align-self-center">
              {!layout.pago && (
                <>
                  <span className="badge badge-sm mb-0 m-0 text-sm flex-column justify-content-center citas-admision-header-no-pagado bg-gradients">
                    <i className="fa-solid fa-sack-xmark"></i>
                  </span>
                </>
              )}
            </div>
          </div>
          {/* - - */}
        </div>
        <div class="card-body citas-admision-body">
          {layout.body.map((sec) => (
            <>
              {/* <div className="d-flex flex-column"> */}
              <div className="row" key={sec.titulo}>
                {sec.campos.map((campo, i) => (
                  <>
                    {console.log(campo.valor)}
                    {(i != 0 && i != 3) && (
                      <>
                        <p className="my-auto col-6" key={campo.titulo}>
                          <strong>{campo.titulo}: </strong>
                          {campo.valor}
                        </p>

                        {/* <p className="my-auto col-6" key={campo.titulo}>
                          <strong>{campo.titulo}: </strong>
                          {campo.valor}
                        </p> */}
                      </>
                    )}
                  </>
                ))}
              </div>
            </>
          ))}
          {/* <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      {/* <div className="row">
        {layout.body.map((sec) => (
          <>
            {sec.campos.map((campo) => (
              <>
                <div className="d-flex">
                  <h5 className="me-3">{campo.titulo}: </h5>
                  <p>{campo.valor}</p>
                </div>
              </>
            ))}
          </>
        ))}
      </div> */}
    </>
  );
};
