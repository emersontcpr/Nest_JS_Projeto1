import { Module } from "@nestjs/common";
import { ClienteController } from "./Controller/cliente.controller";
import { ClienteRepository } from "./Repository/cliente.repository";
import { ClienteService } from "./Service/cliente.service";

@Module({
    controllers: [ClienteController],
    providers: [ClienteService,ClienteRepository]
})
export class ClienteModules {

}

