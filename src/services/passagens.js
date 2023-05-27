import axios from "axios"

function getTransactions(token){
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, createConfig(token))
    return promise
}

function postTransaction(token, body, tipo){
    const promise = axios.post(
    `${process.env.REACT_APP_API_URL}/nova-transacao/${tipo}`,
     body, 
     createConfig(token))
    return promise
}

const apiTransactions = {getTransactions, postTransaction}
export default apiTransactions

/*  function getListaTransacoes(){
    apiTransactions.getTransactions(user.token)
      .then(res=>{
        console.log(res.data)
        setTransacao(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  } */