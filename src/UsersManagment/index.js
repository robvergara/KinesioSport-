import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";
import { CreateUser } from "./CreateUser";
import { SearchUser } from "./SearchUser";
import "./user.css";

export const UsersManagment = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  if (auth.user.status === 2){
    navigate("/");
    return
  }

  if(auth.user)
  return (
    <>
      {auth.user.status === 0
       ?
       (
        <>
          <div className="my-2 w-100 overflow-auto row p-0 m-0 justify-content-center">
            {/* <label>Administrador de Usuarios</label> */}
            <div className="col-9 col-sm-9">
              <SearchUser />
            </div>
            <div className="col-4 col-sm-4 pt-2">
              <CreateUser />
            </div>
          </div>
        </>
      )
      :(
        <>
          <h1>Acceso denegado. Comunicate con tu administrador</h1>
        </>
      )
      }
    </>
  );

  else {
    return(
      <>
        <h1> Acceso denegado</h1>
      </>
    )
  }
};
