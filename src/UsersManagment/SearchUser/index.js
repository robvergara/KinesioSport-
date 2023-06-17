import { useContext, useEffect, useState } from "react";
import { deleteUser, getAllUsers, getUserByCedula, updateUser } from "../../services/user.services";
import { ConfirmationModal } from "../../Modal/ConfirmationModal";
import { InfoModal } from "../../Modal/InfoModal";

import "./style.css";
import { useAuth } from "../../context/auth";
import { UserContext } from "../../context/users.context";
import { UserTable } from "../UserTable";
import { ModalContext } from "../../context/modal.context";

export const SearchUser = () => {

  const {      
    state,
    onRegretModal,
  }= useContext(ModalContext);

  const {
    states, 
    functions,
  }= useContext(UserContext);

  const {    
    user,
    res,
  } = states;


  const {    
    onHandleSearch,
    onSearch,
    onRegret,
  } = functions;

  const auth = useAuth()

  return (
    <>
      <div className="h-100 w-100">
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container-fluid py-1 px-3 w-100">
            {/* BUSCADOR */}
            <div className="collapse navbar-collapse">
              <form onSubmit={onSearch} className="">
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="número de documento"
                    aria-label="Sizing example input"
                    name="cedula_numero"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={onHandleSearch}
                  />
                  <button className="btn buscar bg-gradient" type="submit">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
            {/* DATOS DE USUARIO INGRESADO */}
            {auth.user && (
              <>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                  <li className="breadcrumb-item mini-titulo">{auth.user.nombre}</li>
                  <li className="breadcrumb-item mini-titulo seccion">
                    {
                      auth.user.status === 0? "Super" : 
                      auth.user.status === 1? "Admin" :
                      "Fisio"
                      }
                  </li>
                </ol>
              </nav>
              </>
            )}
          </div>
        </nav>

        {/* COMPONENTE DE LA TABLA DE USUARIOS */}
        <UserTable/>

        {/* MODAL PARA CREACION DE USUARIOS */}
        <div className="d-flex flex-column px-5">
          <>
            {!!user && !user.error && (
              <>

                {/* MODAL INFORMATIVO */}
                {res && (
                  <InfoModal
                    message={res.message}
                    show={state.info}
                    onRegret={onRegretModal}
                  />
                )}
              </>
            )}
            {!!user && user.error && (
              <div className="card p-3">
                <h3 className="card-title">{user.message}</h3>

                <button
                  className="btn btn-outline-warning my-3"
                  onClick={onRegret}
                >
                  regresar
                </button>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};
