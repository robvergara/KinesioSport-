import { api } from "../services/Network";

export async function getLogin(body) {
  // console.log(body)
  try {
    const res = await api.post("/login",{
      usuario: body.usuario,
      contrasena: body.password
    });
    const timestamp = new Date()
    console.log(timestamp)
    if (res.data.token) {
      const user = res.data
      localStorage.setItem("kine_user", JSON.stringify({user, timestamp}));
    }
    console.log(res.data)
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export const getCurrentUser = () => {
  const data = JSON.parse(localStorage.getItem("kine_user"))
  const date = new Date()
  if(data){
    if((date - data.timestamp)>(3*60*60*1000)){
      localStorage.removeItem("kine_user")
      return null
    } else{
      return JSON.parse(localStorage.getItem("kine_user")).user;
    }
  } else{
    return null
  }
};


export function authHeader() {
  const user = JSON.parse(localStorage.getItem("kine_user")).user;

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
    // return { "x-auth-token": user.accessToken };
  } else {
    return {};
  }
}