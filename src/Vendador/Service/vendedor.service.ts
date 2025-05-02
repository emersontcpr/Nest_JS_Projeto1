import { Injectable } from "@nestjs/common";
import { VendedorRepository } from "../Repository/vendedor.repository";

@Injectable()
export class VendedorService{
    constructor(private _vendedorRepositery:VendedorRepository){

    }
}