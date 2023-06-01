import { useContext, useState } from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router";
import "./login.css";
import { ErrorContext } from "../context/error.context";

export const LoginPage = () => {
  const [user, setUser] = useState({ usuario: "", password: "" });
  const auth = useAuth();
  const {state} = useContext(ErrorContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();
    auth.login(user);
    // console.log(user);
  };

  if (auth.user) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <form onSubmit={login} className="container-sm h-100 d-flex">
        {/* <div className="d-flex align-items-center justify-content-center align-middle m-auto"> */}
        <div className="m-auto row g-0 align-items-center">
          <div className="card col-sm-6 mb-5 mb-sm-0 m-auto shadow z-index-0 fadeIn3 fadeInBottom">
            <div className=" p-0 position-relative mt-n4 mx-3 z-index-2 g-transparent">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <div className="fondo-kinesio bg-gradient shadow-primary rounded-4 py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0 py-1">
                    Ingresar
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body text-center fondo">
              <img src="logo.png" className="w-100 my-4" alt="Logo" />
              <div className="row">
                <div className="col-12">
                  <label className="form-label">
                    Usuario
                  </label>
                  {/* <h5 className="text-start">Usuario</h5> */}
                </div>
                <div className="col-12 mb-1">
                  <input
                    required={true}
                    className="form-control fondo-input"
                    placeholder="nombre de usuario"
                    name="usuario"
                    value={user.usuario}
                    onChange={handleChange}
                  />
                  {state.errorUser && (
                    <label className="form-label text-danger">
                      usuario no encontrado
                    </label>
                  )}
                </div>
                <div className="col-12 mt-1">
                  <label className="form-label" >
                    Contraseña
                  </label>
                  {/* <h5 className="text-start">Contraseña</h5> */}
                </div>
                <div className="col-12">
                  <input
                    required={true}
                    type="password"
                    className="form-control fondo-input"
                    placeholder="********"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  {state.errorPassword && (
                    <label className="form-label text-danger">
                      contraseña incorrecta
                    </label>
                  )}
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary mt-3 col-sm-6 mx-auto"
                    type="submit"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
