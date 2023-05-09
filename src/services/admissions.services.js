import {get, post} from "./Network"

// const admissionToken = "645914d61a36206c6d6d7e7d"

export const getLayout=(id)=>{
  return get(`/plantilla/${id}`)
}

export const createAdmission=(body)=>{
  return post(`/formulario`, {
    nombre: body.nombre,
    plantilla:body.plantilla,
    cedula_tipo: body.cedula_tipo,
    cedula_numero: body.cedula_numero,
    usuario_creacion: body.user,
    usuario_instancia: body.usuario_instancia,
    body: body.body
  })
}

export const getAdmissionPacient=(body)=>{
  return get('formulario',{
    id:body.id,
    cedula: body.cedula
  })
}