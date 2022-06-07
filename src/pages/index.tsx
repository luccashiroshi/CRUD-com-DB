import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  
  const { selecionarCliente, excluirCliente, novoCliente, salvarCliente, exibirTabela, tabelaVisivel,cliente, clientes} = useClientes()

  return (
    <div className={`
      flex justify-center items-center 
      h-screen bg-gray-900
      text-white`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao cor="purple" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes}
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente} />
        </>
        ): (
          <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={exibirTabela}/>
        )}
      </Layout>
    </div>
  )
}
