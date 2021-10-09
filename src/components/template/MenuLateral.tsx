import useAuth from "../../data/hook/UseAuth";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icones";
import Logo from "./Logo";
import MenuItems from "./MenuItem";

export default function MenuLateral() {
  const { logout } = useAuth()
  return (
    <aside className={`
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200
    `}>
      <div className={`
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 to-purple-800
       h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItems url="/" texto={"Inicio"} icone={IconeCasa} />
        <MenuItems url="/ajustes" texto={"Ajustes"} icone={IconeAjustes} />
        <MenuItems url="/notificacoes" texto={"Novidades"} icone={IconeSino} />
      </ul>
      <ul className={``}>
        <MenuItems onClick={() => logout()} texto={"Sair"} icone={IconeSair}
          className={`
          text-red-600 hover:bg-red-400
          dark:text-red-400 dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}