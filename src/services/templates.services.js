import { get, post, patch, erase, put } from "./Network";

export function getAllTemplates() {
  return get("/plantillas");
}

export function updateTemplate(id, body) {
  return put(`/plantilla/${id}`, {
    nombre: body.nombre,
    cedula_tipo: "",
    cedula_numero: "",
    usuario_creacion: "",
    usuario_instancia: "",
    pago: false,
    body: body.body,
    date: Date.now,
  });
}
