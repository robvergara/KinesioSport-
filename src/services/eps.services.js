import {get, post, put, erase} from './Network'

export function getAllEps() {
  return get("/eps")
}

export function getEpsById(id) {
  return get(`/eps/${id}`)
}

export function createEps(body) {
  console.log(body)
  return post("/eps",{
    nombre: body,
  })
}

export function updateEps(id,body) {
  return put(`/eps/${id}`, {
    nombre: body,
  })
}

export function deleteEps(id){
  return erase(`/eps/${id}`)
}