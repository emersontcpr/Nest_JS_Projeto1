import { RetornoProduto } from "../dto/retornoProduto.dto";

export class ProdutoEntity {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
    categoria: string;
    idVendedo: number;
    guid: string;
}