import { Module } from "@nestjs/common";
import { ClienteController } from "./Controller/cliente.controller";
import { ClienteRepository } from "./Repository/cliente.repository";
import { ClienteService } from "./Service/cliente.service";
import { LogimUnicoValidador } from "./validacao/Login_Unico.validator";
import { EmailUnicoValidador } from "./validacao/Email_Unico.validetor";
import { ValidadorCPF } from "./validacao/validar_cpf.validetor";
 
@Module({
    controllers: [ClienteController],
    providers: [ClienteService,ClienteRepository,EmailUnicoValidador, LogimUnicoValidador
               , ValidadorCPF ]
})
export class ClienteModules {

}

