import { CreateUser } from "./CreateUser";
import { SearchUser } from "./SearchUser";
import "./user.css";


export const UsersManagment=()=>{

  return(
    // <div className="row">
    //   <SearchUser/>
    //   <CreateUser/>
    // </div>
    <div className="my-2 w-100 overflow-auto">
      {/* <label>Administrador de Usuarios</label> */}
      <SearchUser/>
      <CreateUser/>
    </div>
  )
}