import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { VendedorService } from "src/Vendador/Service/vendedor.service";


@Injectable()
@ValidatorConstraint({ async: true })
export class ValidarVendedor implements ValidatorConstraintInterface {
    constructor(private _vendedorService: VendedorService) {


    }
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const vendedor = await this._vendedorService.ObterVendedorPorId(value);
        console.log(vendedor)
        if (vendedor === undefined)
            return false
        else
            return true;
    }


}

export const IsValidarVendedor = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ValidarVendedor
        });
    };
};