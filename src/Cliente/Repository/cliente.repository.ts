import { Injectable } from "@nestjs/common";
import { ClienteEntity } from "../entity/cliente.entity";




@Injectable()
export class ClienteRepository {
    private clienteArray: ClienteEntity[] = [];

    async add(cliente: ClienteEntity) {
        this.clienteArray.push(cliente);
    }
    async GetAll(): Promise<ClienteEntity[]> {
        return this.clienteArray;
    }
    async GetForId(id: number) {
        const cliente = this.clienteArray.find(
            (x) => x.id === id
        );

        return cliente;
    }

    async GetForGuid(guid: string) {
        const cliente = this.clienteArray.find(
            (x) => x.guid === guid
        );
        return cliente;

    }

    async remove(id: number) {
        this.clienteArray = this.clienteArray.filter(
            (x) => x.id !== id
        )
    }
}