import { IsNotEmpty, IsOptional, Matches, MaxLength, MinLength } from "class-validator";

export class atualizarCliente {

    @IsNotEmpty({ message: "O Nome do cliente é inválido! " })
    @Matches(/^[a-zA-Z\u0020]+$/, { message: "O Nome  do cliente  é inválido! " })
    @MaxLength(20, { message: "O Nome  do cliente  é inválido! " })
    @IsOptional()
    nome: string;

    @IsNotEmpty({ message: "O Sobrenome  do cliente   é inválido! " })
    @Matches(/^[a-zA-Z\u0020]+$/, { message: "O Sobrenome  do cliente  é inválido! " })
    @MaxLength(20, { message: "O Sobrenome  do cliente  é inválido! " })
    @IsOptional()
    sobrenome: string;

    @MinLength(8, { message: "O Senha do cliente  é inválida! " })
    @MaxLength(12, { message: "O Senha do cliente  é inválida! " })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/, { message: "O Senha do cliente  é inválida! " })
    @IsOptional()
    senha: string;
}