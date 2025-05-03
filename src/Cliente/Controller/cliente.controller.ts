import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ClienteService } from "../Service/cliente.service";
import { CriarCliente } from "../dto/CriarCLiente.dto";

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
    async TesteRotaClientePost() {
        return await this._clienteService.ListarTodosClientes();
    }

    @Get('/:guid')
    async ObterClientePorGuid(@Param('guid') guid: string) {
        const clinteDto = await this._clienteService.ObterClientePorGuid(guid);
        if (clinteDto === undefined)
            return {
                messagem: 'Cliente não encontrado!'
            };
        else
            return clinteDto
    }
}