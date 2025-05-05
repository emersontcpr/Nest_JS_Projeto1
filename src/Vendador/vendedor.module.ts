import { Global, Module } from "@nestjs/common";
import { VendedorController } from "./Controller/vendedor.controller";
import { VendedorService } from "./Service/vendedor.service";
import { VendedorRepository } from "./Repository/vendedor.repository";
import { EmailUnicoValidador } from "./validacao/Email_Unico.validetor";
import { LogimUnicoValidador } from "./validacao/Login_Unico.validator";
import { ValidadorCNPJ } from "./validacao/validar_cnpj.validetor";


@Global()
@Module({
    controllers: [VendedorController],
    providers: [VendedorService, VendedorRepository, EmailUnicoValidador,
        LogimUnicoValidador, ValidadorCNPJ],
    exports: [VendedorService, VendedorRepository],
})
export class VendedorModule {

}