import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength } from "class-validator";

export class atualizarProduto {
    @IsNotEmpty({ message: "O Nome do produto é inválido! " })
    @MaxLength(30, { message: "O Nome  do produto  é inválido! " })
    @IsOptional()
    nome: string;
    @IsNotEmpty({ message: "O Descrição do produto é inválido! " })
    @MaxLength(100, { message: "O Descrição do produto   é inválido! " })
    @IsOptional()
    descricao: string;
    //@IsDecimal({ decimal_digits: "2" }, { message: "O valor do produto tem que ser Decimal " })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: "A valor tem que ser numerico! " })
    @IsOptional()
    valor: number;
    @Type(() => Number)
    @IsInt({ message: "A quantidade tem que ser inteiro! " })
    @IsOptional()
    quantidade: number;
    @IsNotEmpty({ message: "O categoria do produto é inválido! " })
    @IsOptional()
    categoria: string;
}
