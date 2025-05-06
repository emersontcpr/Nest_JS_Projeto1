import { Global, Injectable } from "@nestjs/common";
import { VendedorRepository } from "../Repository/vendedor.repository";
import { Criarvendedor } from "../dto/CriarVendedor.dto";
import { VendedorEntity } from "../entity/vendedor.entity";
import { v4 as uuid } from 'uuid';
import { RetornoVendedor } from "../dto/RetornoVendedor.dto";
import { ProdutoService } from "src/Produto/Service/produto.service";
import { atualizarVendedor } from "../dto/atualizarVendedor.dto";

@Injectable()
export class VendedorService {
    constructor(private _vendedorRepositery: VendedorRepository,
        private _produtoService: ProdutoService
    ) {

    }


    async ValidarSeCnpjUnico(cnpj: string): Promise<boolean> {

        console.log("entrou ValidarSeCnpjUnico")
        const listRegistro = await this._vendedorRepositery.getAll();
        if (listRegistro !== undefined) {
            const existeRegistro = listRegistro.find(
                (x) => x.cnpj === cnpj,
            );
            return existeRegistro === undefined;

        }
        console.log("saiu ValidarSeCnpjUnico")
        return true;
    }

    async ValidarEmail(email: string) {
        console.log("entrou ValidarEmail")
        const listRegistro = await this._vendedorRepositery.getAll();
        if (listRegistro !== undefined) {
            const existeRegistro = listRegistro.find(
                (x) => x.email === email,
            );
            return existeRegistro === undefined;
        }
        console.log("saiu ValidarEmail")
        return true;
    }

    async ValidarLogin(login: string) {
        console.log("entrou ValidarLogin")
        const listRegistro = await this._vendedorRepositery.getAll();
        if (listRegistro !== undefined) {
            const existeRegistro = listRegistro.find(
                (x) => x.login === login,
            );
            return existeRegistro === undefined;
        }
        console.log("saiu ValidarLogin")
        return true;
    }

    async CadastrarVendedor(vendedorNovo: Criarvendedor) {
        const novoEntityVendedor = new VendedorEntity();

        novoEntityVendedor.cnpj = vendedorNovo.cnpj;
        novoEntityVendedor.nome = vendedorNovo.nome;
        novoEntityVendedor.sobrenome = vendedorNovo.sobrenome;
        novoEntityVendedor.nomeComercial = vendedorNovo.nomeComercial;
        novoEntityVendedor.senha = vendedorNovo.senha;
        novoEntityVendedor.email = vendedorNovo.email;
        novoEntityVendedor.login = vendedorNovo.login;
        var guid = uuid();
        var isLoop = true;
        do {
            const vendedor = await this._vendedorRepositery.getForGuid(guid);

            if (vendedor === undefined)
                isLoop = false;
            else
                guid = uuid();

        } while (isLoop)

        novoEntityVendedor.guid = guid;
        novoEntityVendedor.id = (await this._vendedorRepositery.getAll()).length + 1;

        this._vendedorRepositery.add(novoEntityVendedor);

        return new RetornoVendedor(novoEntityVendedor.id, novoEntityVendedor.guid, novoEntityVendedor.nome,
            novoEntityVendedor.nomeComercial, novoEntityVendedor.login);

    }
    async ListarTodosVendedores() {
        const listRegistro = await this._vendedorRepositery.getAll();
        return listRegistro.map(
            (x) => new RetornoVendedor(x.id, x.guid, x.nome,
                x.nomeComercial, x.login)
        )
    }

    async ObterVendedorPorGuid(guid: string) {
        const vendedor = await this._vendedorRepositery.getForGuid(guid);
        if (vendedor !== undefined)

            return new RetornoVendedor(vendedor.id, vendedor.guid, vendedor.nome,
                vendedor.nomeComercial, vendedor.login);
        else
            return undefined;

    }
    async ObterVendedorPorId(id: number) {
        const vendedor = await this._vendedorRepositery.getForId(id);
        console.log(vendedor)
        if (vendedor !== undefined)
            return new RetornoVendedor(vendedor.id, vendedor.guid, vendedor.nome,
                vendedor.nomeComercial, vendedor.login);
        else
            return undefined;

    }

    async RemoverVendedor(guid: string) {
        const vendedor = await this._vendedorRepositery.getForGuid(guid);
        if (vendedor !== undefined) {
            const listaProduto = await this._produtoService.ListarTodosProdutosVendedores(vendedor.id);
            if (listaProduto !== undefined) {
                return {
                    messagem: 'Vendedor não removido pois tem produtos cadastrado!'
                };
            }

            await this._vendedorRepositery.remove(vendedor.id);
            return {
                messagem: 'Vendedor Removido com sucesso!'
            };
        }

    }

    async AtaulizarVendedor(guid: string, dtoRecebido: atualizarVendedor) {
        const entityVendedor = new VendedorEntity();
        entityVendedor.nome = dtoRecebido.nome;
        entityVendedor.sobrenome = dtoRecebido.sobrenome;
        entityVendedor.nomeComercial = dtoRecebido.nomeComercial;
        entityVendedor.senha = dtoRecebido.senha;
        await this._vendedorRepositery.update(guid, entityVendedor);

        const vendedor = await this._vendedorRepositery.getForGuid(guid);
        if (vendedor !== undefined)
            return new RetornoVendedor(vendedor.id, vendedor.guid, vendedor.nome,
                vendedor.nomeComercial, vendedor.login);
        else
            return undefined;
    }
}