import { Injectable } from "@nestjs/common";
import { ProdutoRepository } from "../Repository/produto.repository";
import { RetornoProduto } from "../dto/retornoProduto.dto";
import { CriarProduto } from "../dto/CriarProduto.dto";
import { ProdutoEntity } from "../entity/produto.entity";
import { v4 as uuid } from 'uuid';
import { atualizarProduto } from "../dto/atualizarProduto.dto";


@Injectable()
export class ProdutoService {

    constructor(private _produtoRepositery: ProdutoRepository) { }

    async ListarTodosProdutosVendedores(idVendedor: number) {
        const listRegistro = await this._produtoRepositery.GetForIdVendedor(idVendedor);
        return listRegistro.map(
            (x) => new RetornoProduto(x.guid, x.nome,
                x.valor, x.descricao, x.idVendedo)
        );
    }

    async CadastrarProduto(ProdutoNovo: CriarProduto) {
        const novoEntityProduto = new ProdutoEntity();

        novoEntityProduto.categoria = ProdutoNovo.categoria;
        novoEntityProduto.descricao = ProdutoNovo.descricao;
        novoEntityProduto.idVendedo = ProdutoNovo.idVendedor;
        novoEntityProduto.nome = ProdutoNovo.nome;
        novoEntityProduto.quantidade = ProdutoNovo.quantidade;
        novoEntityProduto.valor = ProdutoNovo.valor;
        var guid = uuid();
        var isLoop = true;
        do {
            const vendedor = await this._produtoRepositery.GetForGuid(guid);

            if (vendedor === undefined)
                isLoop = false;
            else
                guid = uuid();

        } while (isLoop)

        novoEntityProduto.guid = guid;
        novoEntityProduto.id = (await this._produtoRepositery.GetAll()).length + 1;

        this._produtoRepositery.add(novoEntityProduto);

        return new RetornoProduto(novoEntityProduto.guid, novoEntityProduto.nome,
            novoEntityProduto.valor, novoEntityProduto.descricao, novoEntityProduto.idVendedo);

    }


    async ObterProdutoPorGuid(guid: string) {
        const produto = await this._produtoRepositery.GetForGuid(guid);
        if (produto !== undefined)

            return new RetornoProduto(produto.guid, produto.nome,
                produto.valor, produto.descricao, produto.idVendedo);
        else
            return undefined;

    }

    async RemoverProduto(guid: string) {
        const produto = await this._produtoRepositery.GetForGuid(guid);
        if (produto !== undefined)
            await this._produtoRepositery.remove(produto.id);
    }


    async AtaulizarProduto(guid: string, dtoRecebido: atualizarProduto) {
        const entityProduto = new ProdutoEntity();
        entityProduto.nome = dtoRecebido.nome;
        entityProduto.categoria = dtoRecebido.categoria;
        entityProduto.descricao = dtoRecebido.descricao;
        entityProduto.quantidade = dtoRecebido.quantidade;
        entityProduto.valor = dtoRecebido.valor;

        await this._produtoRepositery.update(guid, entityProduto);

        const produto = await this._produtoRepositery.GetForGuid(guid);
        if (produto !== undefined)
            return new RetornoProduto(produto.guid, produto.nome,
                produto.valor, produto.descricao, produto.idVendedo);
        else
            return undefined;
    }

}