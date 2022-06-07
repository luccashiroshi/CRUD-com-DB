import ClienteRepositorio from "../../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import Cliente from "../../core/Cliente"
import { useEffect, useState } from "react"
import useTabelaouForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaouForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }
    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        tabelaVisivel,
        exibirTabela,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
    }

}