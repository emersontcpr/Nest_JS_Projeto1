import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClienteService } from "../Service/cliente.service";
import { CriarCliente } from "../dto/CriarCLiente.dto";
import { atualizarCliente } from "../dto/atualizarCliente.dto";

@Controller('Cliente')
export class ClienteController {

    constructor(private _clienteService: ClienteService) { }

    @Get('/Teste')
    async TesteRotaCliente() {
        return "Api Rota Cliente no Ar!"
    }
    @Post()
    async CadastraCliente(@Body() novoCliente: CriarCliente) {

        const retorno = await this._clienteService.CadastrarCliente(novoCliente);
        return {
            dados: retorno,
            messagem: 'Cliente Cadastrado com sucesso!'
        };
    }
    @Get()
    async ListarTodosClientes() {
        return await this._clienteService.ListarTodosClientes();
    }

    @Get('/:guid')
    async ObterClientePorGuid(@Param('guid') guid: string) {
        const clienteDto = await this._clienteService.ObterClientePorGuid(guid);
        if (clienteDto === undefined)
            return {
                messagem: 'Cliente não encontrado!'
            };
        else
            return clienteDto
    }
    @Delete("/:guid")
    async RemoverCliente(@Param('guid') guid: string) {
        this._clienteService.RemoverCliente(guid);
        return {
            messagem: 'Cliente Removido com sucesso!'
        };

    }
    @Put('/:guid')
    async AtualizarCliente(@Param("guid") guid: string,
        @Body() dados: atualizarCliente) {

        const clienteDto = await this._clienteService.AtaulizarCliente(guid, dados);
        if (clienteDto === undefined)
            return {
                messagem: 'Cliente não atualizar!'
            };
        else
            return {
                dados: clienteDto,
                messagem: 'Cliente atualizado com sucesso!'
            };
    }
}