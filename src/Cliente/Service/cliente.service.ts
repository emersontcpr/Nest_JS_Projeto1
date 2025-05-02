import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../Repository/cliente.repository";

@Injectable()
export class ClienteService {

    constructor(private _clienteRepository: ClienteRepository) { }
}