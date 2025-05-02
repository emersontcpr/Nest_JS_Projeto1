import { Controller, Get } from "@nestjs/common";
import { VendedorService } from "../Service/vendedor.service";

@Controller('/Vendedor')
export class VendedorController{
    constructor(private _vendedorService:VendedorService){

    }
    @Get('/Teste')
    async  TesteRotaVendedor(){
        return "Api Rota Vendedor no Ar!"
    }
}