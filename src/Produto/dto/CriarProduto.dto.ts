import { IsDecimal, IsInt, IsNotEmpty, IsNumber, MaxLength } from "class-validator";
import { IsValidarVendedor } from "../validacao/validar_vendedor.validator";
import { Type } from "class-transformer";

export class CriarProduto {
    @IsNotEmpty({ message: "O Nome do produto é inválido! " })
    @MaxLength(30, { message: "O Nome  do produto  é inválido! " })
    nome: string;
    @IsNotEmpty({ message: "O Descrição do produto é inválido! " })
    @MaxLength(100, { message: "O Descrição do produto   é inválido! " })
    descricao: string;
    //@IsDecimal({ decimal_digits: "2" }, { message: "O valor do produto tem que ser Decimal " })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: "A valor tem que ser numerico! " })
    valor: number;
    @Type(() => Number)
    @IsInt({ message: "A quantidade tem que ser inteiro! " })
    quantidade: number;
    @IsNotEmpty({ message: "O categoria do produto é inválido! " })
    categoria: string;
    @Type(() => Number)
    @IsInt({ message: "A id vendedor tem que ser inteiro! " })
    @IsValidarVendedor({ message: "Vendedor inexistente! " })
    idVendedor: number;
}