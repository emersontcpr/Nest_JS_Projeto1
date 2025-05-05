import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { VendedorService } from "../Service/vendedor.service";
 

@Injectable()
@ValidatorConstraint({ async: true})
export class EmailUnicoValidador implements ValidatorConstraintInterface{
    constructor (private _vendedorService: VendedorService){

    }
  async  validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>  {
    console.log("entrou EmailUnicoValidador")
     return this._vendedorService.ValidarEmail(value)
  }
    
}

export const EmailUnicoVendedor = (opcoesDeValidacao : ValidationOptions) =>{

    return (objeto: Object, propriedade: string) =>{
        registerDecorator({
            target:objeto.constructor,
            propertyName:propriedade,
            options:opcoesDeValidacao,
            constraints:[],
            validator:EmailUnicoValidador
        });
    }
}