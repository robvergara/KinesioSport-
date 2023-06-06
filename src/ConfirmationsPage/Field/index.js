
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
            >
              <option value="">seleccionar</option>
              {campo.opciones.map(opcion=>(
                <option value={opcion}>{opcion}</option>
              ))}

            </select>
          </>
          
        )}
        {campo.tipo !== "opciones" && (
          <input 
            type={campo.tipo}
            className="form-control" 
            placeholder={campo.titulo}
            onChange={handleChange}
            name={campo.titulo}
            key={campo.titulo}
            value={campo.valor? campo.valor.valor : ""}
            readOnly={campo.valor? true : false}
          />
        )}
      </form>
    </>
  )
}