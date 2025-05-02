import { Module } from "@nestjs/common";
import { VendedorController } from "./Controller/vendedor.controller";
import { VendedorService } from "./Service/vendedor.service";
import { VendedorRepository } from "./Repository/vendedor.repository";



@Module({
    controllers: [VendedorController],
    providers: [VendedorService, VendedorRepository]
})
export class VendedorModule {

}