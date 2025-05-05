import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { VendedorService } from "../Service/vendedor.service";
import { Criarvendedor } from "../dto/CriarVendedor.dto";

@Controller('/Vendedor')
export class VendedorController {
    constructor(private _vendedorService: VendedorService) {

    }
    @Get('/Teste')
    async TesteRotaVendedor() {
        return "Api Rota Vendedor no Ar!"
    }
    @Post()
    async CadastrarVendedor(@Body() novoVendedotr: Criarvendedor) {

        const retorno = await this._vendedorService.CadastrarVendedor(novoVendedotr);
        return {
            dados: retorno,
            messagem: 'Vendedor Cadastrado com sucesso!'
        };
    }
    @Get()
    async ListarTodosVendedores() {
        return await this._vendedorService.ListarTodosVendedores();
    }
    @Get('/:guid')
    async ObterVendedorPorGuid(@Param('guid') guid: string) {
        const vendedorDto = await this._vendedorService.ObterVendedorPorGuid(guid);
        if (vendedorDto === undefined)
            return {
                messagem: 'Vendedor não encontrado!'
            };
        else
            return vendedorDto
    }
    @Get('/id/:id')
    async ObterVendedorPorId(@Param('id') id: number) {
        const vendedorDto = await this._vendedorService.ObterVendedorPorId(id);
        if (vendedorDto === undefined)
            return {
                messagem: 'Vendedor não encontrado!'
            };
        else
            return vendedorDto
    }

    @Delete("/:guid")
    async RemoverProduto(@Param('guid') guid: string) {
        return this._vendedorService.RemoverVendedor(guid);
    }
}


