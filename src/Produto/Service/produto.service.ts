import { Injectable } from "@nestjs/common";
import { ProdutoRepository } from "../Repository/produto.repository";

@Injectable()
export class ProdutoService {

    constructor(private _produtoRepositery: ProdutoRepository) { }
}