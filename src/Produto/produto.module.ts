import { Module } from "@nestjs/common";
import { ProdutoController } from "./Controller/produto.controller";
import { ProdutoService } from "./Service/produto.service";
import { ProdutoRepository } from "./Repository/produto.repository";


@Module({
    controllers: [ProdutoController],
    providers: [ProdutoService, ProdutoRepository]

})
export class ProdutoModule {

}