import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class Criarvendedor {
    @IsNotEmpty({ message: "O Nome do vendedor é inválido! " })
    @Matches(/^[a-zA-Z]+$/, { message: "O Nome  do vendedor  é inválido! " })
    @MaxLength(20, { message: "O Nome  do vendedor  é inválido! " })
    nome: string;
    @IsNotEmpty({ message: "O Sobrenome  do vendedor   é inválido! " })
    @Matches(/^[a-zA-Z]+$/, { message: "O vendedor  do cliente  é inválido! " })
    @MaxLength(20, { message: "O Sobrenome  do vendedor  é inválido! " })
    sobrenome: string;
    @IsEmail(undefined, { message: "O E-mail do vendedor  é inválido! " })
    @MaxLength(30, { message: "O E-mail do vendedor  é inválido! " })
    email: string;
    @IsNotEmpty({ message: "O cnpj  do vendedor é inválido! " })
    @MinLength(11, { message: "O cnpj do vendedor é inválido! " })
    @MaxLength(14, { message: "O cnpj do vendedor é inválido! " })
    cnpj: string;
    @IsNotEmpty({ message: "O Nome Comercial do vendedor é inválido! " })
    @MaxLength(50, { message: "O Nome Comercial do vendedor  é inválido! " })
    nomeComercial: string;
    @IsNotEmpty({ message: "O Login do vendedor  é inválido! " })
    @Matches(/^[a-zA-Z]+$/, { message: "O Login do vendedor  é inválido! " })
    @MaxLength(15, { message: "O Login do vendedor  é inválido! " })
    login: string;
    @MinLength(8, { message: "O Senha do vendedor  é inválida! " })
    @MaxLength(12, { message: "O Senha do vendedor  é inválida! " })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/, { message: "O Senha do vendedor  é inválida! " })
    senha: string;
}