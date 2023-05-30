import axios from "axios"

function getEstados(){
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/estados`)
    return promise
}

function getOrigens(){
  const promise = axios.get(`${process.env.REACT_APP_API_URL}/origens`)
  return promise
}

function getDestinos(){
  const promise = axios.get(`${process.env.REACT_APP_API_URL}/destinos`)
  return promise
}

function getPassagens(params){
  const promise = axios.get(`${process.env.REACT_APP_API_URL}/passagens`, {params})
  return promise
}

function getHospedagens(params){
  const promise = axios.get(`${process.env.REACT_APP_API_URL}/hospedagens`, {params})
  return promise
}

function getHospedagensById(id){
  const promise = axios.get(`${process.env.REACT_APP_API_URL}/hospedagens/${id}`)
  return promise
}


const api = {getEstados, getOrigens, getDestinos, getPassagens, getHospedagens, getHospedagensById}
export default api