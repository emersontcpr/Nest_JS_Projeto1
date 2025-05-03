import { Injectable } from "@nestjs/common";
import { ClienteEntity } from "../entity/Cliente.Entity";
import { throws } from "assert";

@Injectable()
export class ClienteRepository {
    private clienteArray: ClienteEntity[] = [];

    async add(cliente: ClienteEntity) {
        this.clienteArray.push(cliente);
    }
    async GetAll() {
        this.clienteArray;
    }
    async GetForId(id: number) {
        return this.clienteArray.find(
            (x) => x.id === id
        )
    }
    async GetForGuid(guid: string) {
        return this.clienteArray.find(
            (x) => x.guid === guid
        )
    }

    async remove(id: number) {
        this.clienteArray = this.clienteArray.filter(
            (x) => x.id !== id
        )
    }
}