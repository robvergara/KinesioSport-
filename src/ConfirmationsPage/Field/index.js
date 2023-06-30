export const Field = ({ campo, handleChange }) => {
  return (
    <>
      {campo.tipo != "texto-grande" ? (
        <>
          <form className="col-6 mb-1">
            <div className="input-group mb-3 input-group-sm" key={campo.titulo}>
              
              <span
                className="input-group-text entradas-form fw-medium"
                id="basic-addon1"
              >
                {campo.titulo}:
              </span>
              {campo.tipo === "opciones" && (
                <>
                  <select
                    className="form-control"
                    name={campo.titulo}
                    onChange={handleChange}
                    key={campo.titulo}
                    required
                  >
                    <option value="">seleccionar</option>
                    {campo.opciones.map((opcion) => (
                      <option value={opcion}>{opcion}</option>
                    ))}
                  </select>
                </>
              )}
              {campo.tipo === "numerico" && (
                <input
                  type="number"
                  className="form-control"
                  placeholder="numero"
                  onChange={handleChange}
                  name={campo.titulo}
                  // key={campo.titulo}
                  // value={campo.valor? campo.valor.valor : ""}
                  readOnly={campo.valor.length > 1 ? true : false}
                  required
                />
              )}
              {campo.tipo === "texto" && (
                <input
                  type="text"
                  className="form-control"
                  // placeholder={campo.titulo}
                  onChange={handleChange}
                  name={campo.titulo}
                  // key={campo.titulo}
                  // value={campo.valor? campo.valor.valor : ""}
                  readOnly={campo.valor.length > 1 ? true : false}
                  required
                />
              )}
              {campo.tipo === "archivo" && (
                <input
                  type="file"
                  className="form-control"
                  // placeholder={campo.titulo}
                  onChange={handleChange}
                  name={campo.titulo}
                  // key={campo.titulo}
                  // value={campo.valor? campo.valor.valor : ""}
                  readOnly={campo.valor.length > 1 ? true : false}
                  required
                />
              )}
            </div>
          </form>
        </>
      ) : (
        <>
          <form className="col-12 mb-1">
            <div className="input-group mb-3 input-group-sm" key={campo.titulo}>
              <span
                className="input-group-text entradas-form fw-medium"
                id="basic-addon1"
              >
                {campo.titulo}:
              </span>
              <textarea
                class="form-control"
                aria-label="With textarea"
                onChange={handleChange}
                name={campo.titulo}
                required
              ></textarea>
            </div>
          </form>
        </>
      )}
    </>
    // <>
    //   <form className="col-6 mb-1">
    //     <div className="input-group mb-3 input-group-sm">
    //       <span
    //         className="input-group-text entradas fw-medium"
    //         id="basic-addon1"
    //       >
    //         {campo.titulo}:
    //       </span>
    //       {/* <label>{campo.titulo} </label> */}
    //       {campo.tipo === "opciones" && (
    //         <>
    //           <select
    //             className="form-control"
    //             name={campo.titulo}
    //             onChange={handleChange}
    //             key={campo.titulo}
    //             required
    //           >
    //             <option value="">seleccionar</option>
    //             {campo.opciones.map((opcion) => (
    //               <option value={opcion}>{opcion}</option>
    //             ))}
    //           </select>
    //           {/* </div> */}
    //           {/* <select
    //           className="form-control"
    //           name={campo.titulo}
    //           onChange={handleChange}
    //           key={campo.titulo}
    //           required
    //         >
    //           <option value="">seleccionar</option>
    //           {campo.opciones.map((opcion) => (
    //             <option value={opcion}>{opcion}</option>
    //           ))}
    //         </select> */}
    //         </>
    //       )}
    //       {campo.tipo === "numerico" && (
    //         <input
    //           type="number"
    //           className="form-control"
    //           placeholder="numero"
    //           onChange={handleChange}
    //           name={campo.titulo}
    //           key={campo.titulo}
    //           // value={campo.valor? campo.valor.valor : ""}
    //           readOnly={campo.valor.length > 1 ? true : false}
    //           required
    //         />
    //       )}
    //       {campo.tipo === "texto" && (
    //         <input
    //           type="text"
    //           className="form-control"
    //           // placeholder={campo.titulo}
    //           onChange={handleChange}
    //           name={campo.titulo}
    //           key={campo.titulo}
    //           // value={campo.valor? campo.valor.valor : ""}
    //           readOnly={campo.valor.length > 1 ? true : false}
    //           required
    //         />
    //       )}
    //       {campo.tipo === "texto-grande" && (
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="escriba aqui"
    //           onChange={handleChange}
    //           name={campo.titulo}
    //           key={campo.titulo}
    //           // value={campo.valor? campo.valor.valor : ""}
    //           readOnly={campo.valor.length > 1 ? true : false}
    //           required
    //         />
    //       )}
    //       {campo.tipo === "archivo" && (
    //         <input
    //           type="file"
    //           className="form-control"
    //           // placeholder={campo.titulo}
    //           onChange={handleChange}
    //           name={campo.titulo}
    //           key={campo.titulo}
    //           // value={campo.valor? campo.valor.valor : ""}
    //           readOnly={campo.valor.length > 1 ? true : false}
    //           required
    //         />
    //       )}
    //     </div>
    //   </form>
    // </>
  );
};
