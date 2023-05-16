import { useContext, useEffect, useState } from "react";
import { Field } from "../Field";
import { Tablas } from "../Field/Tabla";
import { FormsContext } from "../../context/forms.context";

export const Section = ({ sec }) => {
  const { setSection } = useContext(FormsContext);
  const [fields, setFields] = useState([]);

  const sectionHandleChange = (field) => {
    // const {value} = field;
    // console.log(field)
    setSection((prevState) => ({
      ...prevState,
      [sec.titulo]: field,
    }));
  };

  const fieldHandleChange = (e) => {
    const { name, value, type } = e.target;
    setFields((prevState) => ({
      ...prevState,
      [name]: {
        valor: value,
        titulo: name,
        tipo: type,
      },
    }));
    // console.log(fields)
  };
  useEffect(() => {
    if (fields != null) {
      // console.log(fields)
      sectionHandleChange(fields);
    }
  }, [fields]);

  return (
    <>
      <h5> {sec.titulo} </h5>
      {!sec.tabla
        ? sec.campos.map((campo) => (
            <>
              {console.log(sec.tabla)}
              <Field
                campo={campo}
                handleChange={fieldHandleChange}
                key={campo.titulo}
              />
              
            </>
          ))
        : <Tablas tabla={sec.campos}/>}
      {/* {sec.campos.map(campo => (
        <>
          {console.log(sec.tabla)}
          <Field campo={campo} handleChange={fieldHandleChange} key={campo.titulo}/>
          <Tablas/>
        </>
      ))} */}
    </>
  );
};
