import axios from 'axios';
// import { authHeader } from './login.service';

export const img_URL = 'http://localhost:3005/'

export const api = axios.create({baseURL:'http://localhost:3001/api'});

export async function get(url, params) {
  try {
    const res = await api.get(url)
    // const res = await api.get(url, {params, headers: authHeader()})
    return res.data
  } catch (error) {
    console.log(error.message);
  }
}

export async function post (url, body){
  try {
    const res = await api.post(url,body);
    // const res = await api.post(url,body,{headers: authHeader()});
    return res.data;
  } catch (error) {
    console.log(error.reason)
  }
}

export async function patch (url,body, params){
  try {
    const res = await api.patch(url, body);
    // const res = await api.patch(url, body, {params, headers: authHeader()});
    return res.data
  } catch (error) {
    console.log(error.reason)
  }
}

export async function erase (url,params){
  try {
    const res = await api.delete(url);
    // const res = await api.delete(url, {params, headers: authHeader()});
    return res.data;
  } catch (error) {
    console.log(error.reason)
  }
}