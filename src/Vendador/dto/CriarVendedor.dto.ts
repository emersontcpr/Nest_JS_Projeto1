import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { IsCnpjValido } from "../validacao/validar_cnpj.validetor";
import { LoginUnicoVendedor } from "../validacao/Login_Unico.validator";
import { EmailUnicoVendedor } from "../validacao/Email_Unico.validetor";

export class Criarvendedor {
    @IsNotEmpty({ message: "O Nome do vendedor é inválido! " })
    @Matches(/^[a-zA-Z\u0020]+$/, { message: "O Nome  do vendedor  é inválido! " })
    @MaxLength(20, { message: "O Nome  do vendedor  é inválido! " })
    nome: string;
    @IsNotEmpty({ message: "O Sobrenome  do vendedor   é inválido! " })
    @Matches(/^[a-zA-Z\u0020]+$/, { message: "O Sobrenome  do vendedor  é inválido! " })
    @MaxLength(20, { message: "O Sobrenome  do vendedor  é inválido! " })
    sobrenome: string;
    @IsEmail(undefined, { message: "O E-mail do vendedor  é inválido! " })
    @MaxLength(30, { message: "O E-mail do vendedor  é inválido! " })
    @EmailUnicoVendedor({ message: "E-mail já Cadastrado" })
    email: string;
    @IsNotEmpty({ message: "O cnpj  do vendedor é inválido! IsNotEmpty" })
    @MinLength(14, { message: "O cnpj do vendedor é inválido! MinLength " })
    @MaxLength(19, { message: "O cnpj do vendedor é inválido! MaxLength" })
    @IsCnpjValido({ message: "O cnpj do vendedor é inválido! IsCnpjValido" })
    cnpj: string;
    @Matches(/^[0-9a-zA-Z\u0020\u005F\u0040\u002E]+$/, { message: "O Nome Comercial do vendedor  é inválido! " })
    @IsNotEmpty({ message: "O Nome Comercial do vendedor é inválido! " })
    @MaxLength(50, { message: "O Nome Comercial do vendedor  é inválido! " })
    nomeComercial: string;
    @IsNotEmpty({ message: "O Login do vendedor  é inválido! " })
    @Matches(/^[0-9a-zA-Z\u0020\u005F\u0040\u002E]+$/, { message: "O Login do vendedor  é inválido! " })
    @MaxLength(15, { message: "O Login do vendedor  é inválido! " })
    @LoginUnicoVendedor({ message: "Login já Cadastrado" })
    login: string;
    @MinLength(8, { message: "O Senha do vendedor  é inválida! " })
    @MaxLength(12, { message: "O Senha do vendedor  é inválida! " })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/, { message: "O Senha do vendedor  é inválida! " })
    senha: string;
}