import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { VendedorService } from "../Service/vendedor.service";


@Injectable()
@ValidatorConstraint({ async: true })
export class LogimUnicoValidador implements ValidatorConstraintInterface {
    constructor(private _vendedorService: VendedorService) {

    }
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        console.log("entrou LogimUnicoValidador")
        return this._vendedorService.ValidarLogin(value)
    }

}

export const LoginUnicoVendedor = (opcoesDeValidacao: ValidationOptions) => {

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