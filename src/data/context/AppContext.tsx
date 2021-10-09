import { createContext, useEffect, useState } from "react";

interface PropsContext {
  theme?: string
  alternarTema?: () => void
}

const AppContext = createContext<PropsContext>({})

export function AppProvider(props) {
  const [tema, setTema] = useState('')

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : ''
    setTema(novoTema)
    localStorage.setItem('tema', novoTema)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    setTema(temaSalvo)
  }, [])

  return (
    <AppContext.Provider value={{
      theme: tema,
      alternarTema
    }}
    >
      {props.children}
    </AppContext.Provider >
  )
}

export default AppContext
export const AppConsumer = AppContext.Consumer