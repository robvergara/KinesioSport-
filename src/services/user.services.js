import {get, post, patch, erase} from './Network';

export function getAllUsers(){
  return get("/usuario");
}

export function getUserByCedula(cedula){
  return get(`/usuario/cedula/${cedula}`);
}

export function createUser(body){
  return post(`/usuario`,{
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    usuario: body.usuario,
    contrasena: body.contraseña,
    status: body.status,
  })
}

export function updateUser(id, body){
  return patch(`/usuario/${id}`,{
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    usuario: body.usuario,
    contrasena: body.contraseña,
    status: body.status,
  })
}

export function deleteUser(id){
  return erase(`/usuario/${id}`);
}