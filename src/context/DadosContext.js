import { createContext, useState } from "react"

export const DadosContext = createContext()

export default function DadosProvider({ children }) {
  const [dadosViagem, setDadosViagem] = useState([])

  return (
    <DadosContext.Provider value={{dadosViagem, setDadosViagem }}>
      {children}
    </DadosContext.Provider>
  )
}