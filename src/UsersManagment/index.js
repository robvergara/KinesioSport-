import { CreateUser } from "./CreateUser";
import { SearchUser } from "./SearchUser";


export const UsersManagment=()=>{

  return(
    <div className="row">
      <SearchUser/>
      <CreateUser/>
    </div>
  )
}