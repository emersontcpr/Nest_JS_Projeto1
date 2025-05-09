import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "../entity/produto.entity";

@Injectable()
export class ProdutoRepository {
    private produtoArray: ProdutoEntity[] = [];

    async add(produto: ProdutoEntity) {
        this.produtoArray.push(produto);
    }
    async GetAll() {
        return this.produtoArray;
    }

    async GetForId(id: number) {
        return this.produtoArray.find(
            (x) => x.id === id,
        );
    }
    async GetForGuid(guid: string) {
        return this.produtoArray.find(
            (x) => x.guid === guid,
        );
    }
    async GetForIdVendedor(id: number) {
        return this.produtoArray.filter(
            (x) => x.idVendedo === id,
        );
    }
    async remove(id: number) {
        this.produtoArray = this.produtoArray.filter(
            (x) => x.id !== id,
        );
    }
    
        async update(guid: string, dadosParaAtualizar: Partial<ProdutoEntity>) {
            const dadosNaoAtualizaveis = ['id',  'idVendedo', 'guid'];
            const produto = this.GetForGuid(guid);
            Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
                if (dadosNaoAtualizaveis.includes(chave))
                    return;
                else if (valor !== undefined)
                    produto[chave] = valor;
            })
        }
}