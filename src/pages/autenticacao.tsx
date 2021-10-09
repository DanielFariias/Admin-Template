import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icones";
import useAuth from "../data/hook/UseAuth";

export default function Autenticacao() {
  const { cadastrar, login, loginGoogle } = useAuth()

  const [modo, setModo] = useState<'Login' | 'Cadastro'>('Login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(null)

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  async function submit() {
    try {
      if (modo === 'Login') {
        await login(email, senha)
      } else {
        await cadastrar(email, senha)
      }
    } catch (e) {
      exibirErro(e?.message ?? 'Erro desconhecido!')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === "Login" ? 'Entre com sua Conta' : "Cadrastre-se na plataforma!"}
        </h1>

        {erro ? (
          <div className={
            `flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg`
          }>
            {IconeAtencao()}
            <span className="ml-3">{erro}</span>
          </div>
        ) : false}

        <AuthInput
          label="Email"
          valor={email}
          valorMudou={setEmail}
          tipo="email"
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button onClick={submit} className={`
        w-full bg-indigo-500 hover:bg-indigo-400
        text-white rounded-lg px-4 py-3 mt-6
      `}>
          {modo === "Login" ? 'Entrar' : "Cadrastrar"}
        </button>

        <hr className={`my-6 border-gray-300 w-full`} />

        <button onClick={loginGoogle} className={`
        w-full bg-red-500 hover:bg-red-400
        text-white rounded-lg px-4 py-3
      `}>
          Entrar com Google
        </button>

        {modo === 'Login'
          ? <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo('Cadastro')}
              className={
                `text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer`
              }> Crie um Conta Gratuitamente</a>
          </p>
          : <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setModo('Login')}
              className={
                `text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer`
              }> Entre com a suas Credenciais</a>
          </p>
        }
      </div>
    </div>
  )
}