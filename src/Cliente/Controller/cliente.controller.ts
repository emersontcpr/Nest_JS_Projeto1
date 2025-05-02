import { Controller, Get } from "@nestjs/common";
import { ClienteService } from "../Service/cliente.service";

@Controller('Cliente')
export class ClienteController {

    constructor(private _clienteService: ClienteService) { }

    @Get('/Teste')
    async TesteRotaCliente() {
        return "Api Rota Cliente no Ar!"
    }
}