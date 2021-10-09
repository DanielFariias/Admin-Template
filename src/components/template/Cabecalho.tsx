import useAppData from "../../data/hook/useAppData";
import AvatarUsuario from "./AvatarUser";
import BotaoAlterTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Cabecalho(props: CabecalhoProps) {
  const { theme, alternarTema } = useAppData()
  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end items-center`}>
        <BotaoAlterTema tema={theme} alternarTema={alternarTema} />
        <AvatarUsuario className={`ml-3`} />
      </div>
    </div>
  )
}