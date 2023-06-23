export const VisorTitulo = ({ titulo }) => {

    // console.log('TITULO')
    // console.log(titulo)
  return (
    <>
      <div className="d-flex justify-content-end m-auto">
        <p className="text-sm mb-0 text-body-tertiary me-3 align-self-center">
          {titulo}
        </p>
      </div>
    </>
  );
};
