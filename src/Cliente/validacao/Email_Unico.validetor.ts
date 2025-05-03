import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ClienteService } from "../Service/cliente.service";
import { Injectable } from "@nestjs/common";
 

@Injectable()
@ValidatorConstraint({ async: true})
export class EmailUnicoValidador implements ValidatorConstraintInterface{
    constructor (private _clienteService: ClienteService){

    }
  async  validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>  {
    console.log("entrou EmailUnicoValidador")
     return this._clienteService.ValidarEmail(value)
  }
    
}

export const EmailUnico = (opcoesDeValidacao : ValidationOptions) =>{

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