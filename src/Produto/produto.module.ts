import { Global, Module } from "@nestjs/common";
import { ProdutoController } from "./Controller/produto.controller";
import { ProdutoService } from "./Service/produto.service";
import { ProdutoRepository } from "./Repository/produto.repository";
import { ValidarVendedor } from "./validacao/validar_vendedor.validator";
import { VendedorModule } from "src/Vendador/vendedor.module";

@Global()
@Module({
    controllers: [ProdutoController],
    providers: [ProdutoService, ProdutoRepository, ValidarVendedor],
    exports: [ProdutoService, ProdutoRepository],
    //imports: [VendedorModule]
})
export class ProdutoModule {

}