import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";

export function LogOutPage(){
  const auth = useAuth();
  const navigate = useNavigate()

  const logout = (e) =>{
    e.preventDefault();
    auth.logout()
  }

  const onCancel= (e)=>{
    e.preventDefault();
    navigate(-1)
  }

  if(auth.user){
    return(
      <>
        {auth.user.token && (
          <form className="container text-center mb-4" onSubmit={logout}>
            <div className="d-flex align-items-center justify-content-center align-middle">
              <div className="card ingresar">
                <div className="card-header text-center">
                  SALIR
                </div>
                <div className="text-center pb-3">

                  <img src="logo.png" className="w-50 my-4" alt="Logo"/>

                  <div className="row">

                    <div className="col-12">
                      <label className="col mb-3">Seguro que quieres salir?</label>
                    </div>

                    <div className="col-12">
                      <div className="d-flex justify-content-center ">
                        <button className="btn btn-outline-warning d-flex justify-content-center" type="submit">

                            <i className="fa-solid fa-check"></i>
                            <p>SI</p>

                        </button>
                        <button className="btn btn-outline-secondary d-flex p-3 mx-3" onClick={onCancel}>

                            <i className="fa-solid fa-xmark "></i>
                            <p>NO</p>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </>
    )
  }
}