import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { VendedorService } from "../Service/vendedor.service";
import { Validar } from "util/validar";



@Injectable()
@ValidatorConstraint({ async: true })
export class ValidadorCNPJ implements ValidatorConstraintInterface {
    constructor(private _vendedorService: VendedorService) {


    }
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        console.log("entrou ValidadorCNPJ")
        if (value === undefined)
            return false;

        const validadorFormato = new Validar();
        const isValidador = await validadorFormato.ValidarCnpj(value);
        console.log(isValidador)

        if (!isValidador)
            return false;
        else {
            const isValidado = await this._vendedorService.ValidarSeCnpjUnico(value);
            console.log(isValidado)
            return isValidado;
        }
    }

}

export const IsCnpjValido = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ValidadorCNPJ
        });
    };
};