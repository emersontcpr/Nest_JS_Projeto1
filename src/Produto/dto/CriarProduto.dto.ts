import { IsDecimal, IsInt, IsNotEmpty, MaxLength } from "class-validator";

export class CriarProduto {
    @IsNotEmpty({ message: "O Nome do produto é inválido! " })
    @MaxLength(30, { message: "O Nome  do produto  é inválido! " })
    nome: string;
    @IsNotEmpty({ message: "O Descrição do produto é inválido! " })
    @MaxLength(100, { message: "O Descrição do produto   é inválido! " })
    descricao: string;
    @IsDecimal()
    valor: number;
    @IsInt()
    quantidade: number;
    @IsNotEmpty({ message: "O categoria do produto é inválido! " })
    categoria: string;
    @IsInt()
    idVendedo: number;
}