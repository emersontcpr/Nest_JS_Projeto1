import { Global, Injectable } from "@nestjs/common";
import { VendedorEntity } from "../entity/vendedor.entity";

@Injectable()
export class VendedorRepository {
    private vendedorArray: VendedorEntity[] = [];

    async add(vendedor: VendedorEntity) {
        this.vendedorArray.push(vendedor);
    }
    async getAll() {
        return this.vendedorArray;
    }

    async getForId(id: number) {
        return this.vendedorArray.find(
            (x) => x.id === id,
        );
    }
    async getForGuid(guid: string) {
        return this.vendedorArray.find(
            (x) => x.guid === guid,
        );
    }

    async remove(id: number) {
        this.vendedorArray = this.vendedorArray.filter(
            (x) => x.id !== id
        );
    }

     async update(guid: string, dadosParaAtualizar: Partial<VendedorEntity>) {
            const dadosNaoAtualizaveis = ['id', 'email', 'cnpj', 'login', 'guid'];
            const vendedor = this.getForGuid(guid);
            Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
                if (dadosNaoAtualizaveis.includes(chave))
                    return;
                else if (valor !== undefined)
                    vendedor[chave] = valor;
            })
        }
}