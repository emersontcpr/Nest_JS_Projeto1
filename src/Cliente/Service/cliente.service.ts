import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../Repository/cliente.repository";
import { CriarCliente } from "../dto/CriarCLiente.dto";
import { ClienteEntity } from "../entity/cliente.entity";
import { v4 as uuid } from 'uuid';
import { RetornoClienteDto } from "../dto/retornoCliente.dto";

@Injectable()
export class ClienteService {

    constructor(private _clienteRepository: ClienteRepository) { }

    async ValidarSeCpfUnico(cpf: string): Promise<boolean> {

        console.log("entrou ValidarSeCpfUnico")
        const listRegistro = await this._clienteRepository.GetAll();
        if (listRegistro !== undefined) {
            const existeRegistro = listRegistro.find(
                (x) => x.cpf === cpf,
            );
            return existeRegistro === undefined;

        }
        console.log("saiu ValidarSeCpfUnico")
        return true;
    }

    async ValidarEmail(email: string) {
        console.log("entrou ValidarEmail")
        const listRegistro = await this._clienteRepository.GetAll();
        if (listRegistro !== undefined) {
            const existeRegistro = listRegistro.find(
                (x) => x.email === email,
            );
            return existeRegistro === undefined;
        }
        console.log("saiu ValidarEmail")
        return true;
    }

    async ValidarLogin(login: string) {
        console.log("entrou ValidarLogin")
        const listRegistro = await this._clienteRepository.GetAll();
        if (listRegistro !== undefined) {
            const existeRegistro = listRegistro.find(
                (x) => x.login === login,
            );
            return existeRegistro === undefined;
        }
        console.log("saiu ValidarLogin")
        return true;
    }

    async CadastrarCliente(clienteNovo: CriarCliente) {
        const novoEntityCliente = new ClienteEntity();

        novoEntityCliente.cpf = clienteNovo.cpf;
        novoEntityCliente.nome = clienteNovo.nome;
        novoEntityCliente.sobrenome = clienteNovo.sobrenome;
        novoEntityCliente.senha = clienteNovo.senha;
        novoEntityCliente.email = clienteNovo.email;
        novoEntityCliente.login = clienteNovo.login;
        var guid = uuid();
        var isLoop = true;
        do {
            const cliente = await this._clienteRepository.GetForGuid(guid);

            if (cliente === undefined)
                isLoop = false;
            else
                guid = uuid();

        } while (isLoop)

        novoEntityCliente.guid = guid;
        novoEntityCliente.id = (await this._clienteRepository.GetAll()).length + 1;

        this._clienteRepository.add(novoEntityCliente);

        return new RetornoClienteDto(novoEntityCliente.guid, novoEntityCliente.nome, novoEntityCliente.login);

    }
    async ListarTodosClientes() {
        const listRegistro = await this._clienteRepository.GetAll();
        return listRegistro.map(
            (x) => new RetornoClienteDto(x.guid, x.nome, x.login)
        )
    }

    async ObterClientePorGuid(guid: string) {
        const cliente = await this._clienteRepository.GetForGuid(guid);
        if (cliente !== undefined)
            return new RetornoClienteDto(cliente.guid, cliente.nome, cliente.login);
        else
            return undefined;

    }

    async RemoverCliente(guid: string) {
        const cliente = await this._clienteRepository.GetForGuid(guid);
        if (cliente !== undefined)
            await this._clienteRepository.remove(cliente.id);
    }

}