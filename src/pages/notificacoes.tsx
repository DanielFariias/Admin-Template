import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const ctx = useAppData()
  return (
    <Layout
      titulo={"Notificações"}
      subtitulo={"Aqui voce ira genrencia suas notificações"}>
      {/* <AppConsumer>
          {dados => <h3>{dados.nome}</h3>}
        </AppConsumer> */}
      <h3>{ctx.theme}</h3>
    </Layout>
  )
}
