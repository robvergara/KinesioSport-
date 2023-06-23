
export const Field=({campo, handleChange})=>{

  return(
    <>
      <form className="col-4 mb-3">

        <label >{campo.titulo} </label>
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
              {campo.opciones.map(opcion=>(
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
            key={campo.titulo}
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
            key={campo.titulo}
            // value={campo.valor? campo.valor.valor : ""}
            readOnly={campo.valor.length > 1 ? true : false}
            required
          />
        )}
        {campo.tipo === "texto-grande" && (
          <input 
            type="text"
            className="form-control" 
            placeholder="escriba aqui"
            onChange={handleChange}
            name={campo.titulo}
            key={campo.titulo}
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
            key={campo.titulo}
            // value={campo.valor? campo.valor.valor : ""}
            readOnly={campo.valor.length > 1 ? true : false}
            required
          />
        )}
      </form>
    </>
  )
}