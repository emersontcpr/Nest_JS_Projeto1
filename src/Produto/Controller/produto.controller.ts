import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../Service/produto.service";
import { CriarProduto } from "../dto/CriarProduto.dto";
import { atualizarProduto } from "../dto/atualizarProduto.dto";

@Controller('/Produto')
export class ProdutoController {
    constructor(private _produtoService: ProdutoService) { }

    @Get('/Teste')
    async TesteRotaProduto() {
        return "Api Rota Produto no Ar!"
    }

    @Post()
    async CadastrarVendedor(@Body() novoVendedotr: CriarProduto) {

        const retorno = await this._produtoService.CadastrarProduto(novoVendedotr);

        return {
            dados: retorno,
            messagem: 'Produto Cadastrado com sucesso!'
        };
    }

    @Get('/listarTodos/:idVendedor')
    async ListarTodosProdutosPorVendedor(@Param('idVendedor') idVendedor: number) {
        return await this._produtoService.ListarTodosProdutosVendedores(idVendedor);
    }

    @Get('/:guid')
    async ObterProdutoPorGuid(@Param('guid') guid: string) {
        const ProdutoDto = await this._produtoService.ObterProdutoPorGuid(guid);
        if (ProdutoDto === undefined)
            return {
                messagem: 'Produto não encontrado!'
            };
        else
            return ProdutoDto
    }
    @Delete("/:guid")
    async RemoverProduto(@Param('guid') guid: string) {
        this._produtoService.RemoverProduto(guid);
        return {
            messagem: 'Produto Removido com sucesso!'
        };

    }

    @Put('/:guid')
    async AtualizarProduto(@Param("guid") guid: string,
        @Body() dados: atualizarProduto) {

        const ProdutoDto = await this._produtoService.AtaulizarProduto(guid, dados);
        if (ProdutoDto === undefined)
            return {
                messagem: 'Produto não atualizar!'
            };
        else
            return {
                dados: ProdutoDto,
                messagem: 'Produto atualizado com sucesso!'
            };
    }
}

