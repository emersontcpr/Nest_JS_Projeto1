import { Controller, Get } from "@nestjs/common";
import { ProdutoService } from "../Service/produto.service";

@Controller('/Produto')
export class ProdutoController{
    constructor(private _produtoService:ProdutoService){}

    @Get('/Teste')
    async  TesteRotaProduto(){
        return "Api Rota Produto no Ar!"
    }
}

