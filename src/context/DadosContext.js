import { createContext, useState } from "react"

export const DadosContext = createContext()

export default function DadosProvider({ children }) {
  const [dadosViagem, setDadosViagem] = useState([])
  const [dadosHospedagem, setDadosHospedagem] = useState([])


  return (
    <DadosContext.Provider value={{dadosViagem, setDadosViagem,
    dadosHospedagem, setDadosHospedagem }}>
      {children}
    </DadosContext.Provider>
  )
}