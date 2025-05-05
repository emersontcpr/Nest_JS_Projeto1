export class RetornoProduto {
    constructor(readonly Guid: string,
        readonly Nome: string, readonly valor: number,
        readonly descricao: string, readonly idVendedor: number) { }
}