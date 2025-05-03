import { IsEmail,  IsNotEmpty, Matches,  MaxLength, MinLength } from "class-validator";

export class CriarCliente{
    @IsNotEmpty({message:"O Nome do cliente é inválido! "})
    @Matches(/^[a-zA-Z]+$/,{message:"O Nome  do cliente  é inválido! "})
    @MaxLength(20,{message:"O Nome  do cliente  é inválido! "})
    nome: string;
    @IsNotEmpty({message:"O Sobrenome  do cliente   é inválido! "})
    @Matches(/^[a-zA-Z]+$/,{message:"O Sobrenome  do cliente  é inválido! "})
    @MaxLength(20,{message:"O Sobrenome  do cliente  é inválido! "})
    sobrenome: string;
    @IsEmail(undefined,{message:"O E-mail do cliente  é inválido! "})
    @MaxLength(30,{message:"O E-mail do cliente  é inválido! "})
    email: string;
    @IsNotEmpty({message:"O CPF  do cliente é inválido! "})
    @MinLength(11,{message:"O CPF do cliente é inválido! "})
    @MaxLength(14,{message:"O CPF do cliente é inválido! "})
    cpf:string;
    @IsNotEmpty({message:"O Login do cliente  é inválido! "})
    @Matches(/^[a-zA-Z]+$/,{message:"O Login do cliente  é inválido! "})
    @MaxLength(15,{message:"O Login do cliente  é inválido! "})
    login: string
    @MinLength(8,{message:"O Senha do cliente  é inválida! "})
    @MaxLength(12,{message:"O Senha do cliente  é inválida! "})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,{message:"O Senha do cliente  é inválida! "})
    senha: string;
}