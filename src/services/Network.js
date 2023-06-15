import axios from 'axios';
import { authHeader } from './login.services';

export const api = axios.create({baseURL:'http://localhost:3001/api'});

export async function get(url, params) {
  try {
    const res = await api.get(url, { params, headers: authHeader() })
    // const res = await api.get(url, {params, headers: authHeader()})
    return res.data
  } catch (error) {
    console.log(error.message);
  }
}

export async function post (url, body){
  try {
    const res = await api.post(url, body, {headers: authHeader()});
    // const res = await api.post(url,body,{headers: authHeader()});
    return res.data;
  } catch (error) {
    console.log(error.reason)
  }
}

export async function patch (url,body, params){
  try {
    const res = await api.patch(url, body, {params, headers: authHeader()});
    // const res = await api.patch(url, body, {params, headers: authHeader()});
    return res.data
  } catch (error) {
    console.log(error.reason)
  }
}

export async function put (url,body, params){
  try {
    const res = await api.put(url, body, {params, headers: authHeader()});
    // const res = await api.patch(url, body, {params, headers: authHeader()});
    return res.data
  } catch (error) {
    console.log(error.reason)
  }
}

export async function erase (url,params){
  try {
    const res = await api.delete(url, { params, headers: authHeader() });
    // const res = await api.delete(url, {params, headers: authHeader()});
    return res.data;
  } catch (error) {
    console.log(error.reason)
  }
}