import Cliente from "../../core/Cliente";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bruno', 42, '2'),
    new Cliente('Luccas', 19, '3'),
    new Cliente('Nando', 21, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {

  }

  return (
    <div className={`
      flex justify-center items-center 
      h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}></Tabela>
      </Layout>
    </div>
  )
}
