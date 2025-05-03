import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ClienteService } from "../Service/cliente.service";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({ async: true })
export class LogimUnicoValidador implements ValidatorConstraintInterface {
    constructor(private _clienteService: ClienteService) {

    }
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        console.log("entrou LogimUnicoValidador")
        return this._clienteService.ValidarLogin(value)
    }

}

export const LoginUnico = (opcoesDeValidacao: ValidationOptions) => {

    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: LogimUnicoValidador
        });
    }
}