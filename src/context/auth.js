import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getCurrentUser, getLogin } from "../services/login.services";
import { ErrorContext } from "./error.context";

// import { StateContext } from "./statesContext";

export const AuthContext = createContext()

export function AuthProvider({children}){
  const navigate = useNavigate();
  const {onPasswordError, onUserError} = useContext(ErrorContext);
  const [user, setUser] = useState(null);
  // console.log(user);

  useEffect(()=>{
      const localStogareUser = getCurrentUser();

      if (!!localStogareUser){
       setUser(localStogareUser);
      }

  },[]);



  const login = async(usuario)=>{
    // console.log(usuario);
    
    try {
      const user = await getLogin(usuario);
      console.log(user)
      if(user.token){
        const userName = user.nombre;
        const status = user.status;
  
        setUser({userName, status});
        // onRegret();
        navigate('/');
        window.location.reload()
      }

      if(user === "Contrasena Equivocada"){
        onPasswordError()
      }

      if (user === "Usuario no encontrado"){
        onUserError()
      }

    } catch (error) {
      // onError();
      console.log(error);
    }
  }

  const logout=()=>{
    localStorage.removeItem("kine_user");
    setUser(null);
    console.log('salida exitosa');
    navigate('/login');
    window.location.reload()
  }

  const auth = {user, login, logout}

  return(
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth
}

export function AuthRoute(props) {
  const auth = useAuth();

  if(!auth.user){
    return <Navigate to='/login'/>
  }

  return props.children;
}


