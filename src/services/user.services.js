import {get, post, put, erase} from './Network';

export function getAllUsers(){
  return get("/usuario");
}

export function getUserByCedula(cedula){
  return get(`/usuario/cedula/${cedula}`);
}

export function getUserById(id){
  return get(`/usuario/${id}`);
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
  return put(`/usuario/${id}`,{
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    status: body.status,
  })
}

export function deleteUser(id){
  return erase(`/usuario/${id}`);
}