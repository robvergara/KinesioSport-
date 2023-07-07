import {get, post, put} from "./Network"

// const admissionToken = "645914d61a36206c6d6d7e7d"

export const getLayout=(id)=>{
  return get(`/plantilla/${id}`)
}

export const createAdmission=(body)=>{
  return post(`/admision`, {
    nombre: body.nombre,
    plantilla:body.plantilla,
    cedula_tipo: body.cedula_tipo,
    cedula_numero: body.cedula_numero,
    usuario_creacion: body.usuario_creacion || "admin",
    usuario_completado: body.usuario_instancia,
    body: body.body,
    pago: body.pago,
    valor: body.valor,
    padre_id:body.padre_id

  })
}

export const getAdmissionPacient=(body)=>{
  return get('formulario',{
    id:body.id,
    cedula: body.cedula
  })
}

export const getAllHistories=(cedula)=>{
  return get(`admision/${cedula}`);
}

export const getHistoriesForAdmission=(admissionId,cedula)=>{
  return get(`admision/${admissionId}/${cedula}`)
}

export const getOneHistory=(formId)=>{
  return get(`formulario/view/${formId}`);
}

export const getAdmissionById=(id)=>{
  return get(`form/${id}`);
}

export const updatePayment=(id,body)=>{
  return put (`formulario/${id}`,{
    nombre: body.nombre,
    plantilla:body.plantilla,
    cedula_tipo: body.cedula_tipo,
    cedula_numero: body.cedula_numero,
    usuario_creacion: body.usuario_creacion || "admin",
    usuario_completado: body.usuario_instancia,
    body: body.body,
    pago: body.pago,
    valor: body.valor
  })
}