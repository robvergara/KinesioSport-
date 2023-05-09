import {get, post, patch, erase} from './Network'

export function getAllpatients() {
  return get("/paciente")
}

export function getPatientById(id) {
  return get(`/paciente/${id}`)
}

export function getPatientByCedula(cedula){
  return get(`/paciente/cedula/${cedula}`)
}

export function getPatientByEPs(id){
  return get(`/paciente/eps/${id}`)
}

export function createPatient(body) {
  console.log(body)
  return post("/paciente",{
    nombre: body.nombre,
    apellido1: body.apellido1,
    apellido2: body.apellido2,
    entidad_id: body.entidad_id,
    cedula_tipo: body.cedula_tipo,
    cedula_numero: body.cedula_numero,
    nacimiento: body.nacimiento,
    edad: body.edad,
    celular: body.celular,
    direccion: body.direccion,
    familiar: body.familiar,
    parentezco: body.parentezco,
    familiar_celular: body.familiar_celular
  })
}

export function updatePatient(id,body) {
  return patch(`/paciente/${id}`, {
    nombre: body.nombre,
    apellido1: body.apellido1,
    apellido2: body.apellido2,
    entidad_id: body.entidad_id,
    cedula_tipo: body.cedula_tipo,
    cedula_numero: body.cedula_numero,
    nacimiento: body.nacimiento,
    edad: body.edad,
    celular: body.celular,
    direccion: body.direccion,
    familiar: body.familiar,
    parentezco: body.parentezco,
    familiar_celular: body.familiar_celular
  })
}

export function deletePatient(id){
  return erase(`/paciente/${id}`)
}