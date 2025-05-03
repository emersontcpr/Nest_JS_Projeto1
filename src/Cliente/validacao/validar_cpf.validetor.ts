import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ClienteService } from "../Service/cliente.service";
import { Validar } from "util/validar";
import { Injectable } from "@nestjs/common";



@Injectable()
@ValidatorConstraint({ async: true })
export class ValidadorCPF implements ValidatorConstraintInterface {
    constructor(private _clienteService: ClienteService) {


    }
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        console.log("entrou ValidadorCPF")
        if (value === undefined)
            return false;

        const validadorFormato = new Validar();
        const isValidador = await validadorFormato.ValidarCPF(value);

        if (!isValidador)
            return false;
        else {
            return await this._clienteService.ValidarSeCpfUnico(value);
        }
    }

}

export const IsCpfValido = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ValidadorCPF
        });
    };
};