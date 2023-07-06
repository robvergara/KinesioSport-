

export const AdmissionLecture=({layout})=>{

  return(
    <>
      <div className="row">
      {layout.body.map (sec => (
          <>
            {sec.campos.map(campo=>(
              <>
                <div className="d-flex">
                  <h5 className="me-3">{campo.titulo}: </h5>
                  <p>{campo.valor}</p>
                </div>
              </>
            ))}
          </>
        ))}
      </div>
    </>
  )
}