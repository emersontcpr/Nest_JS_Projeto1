import { IsNotEmpty, IsOptional, Matches, MaxLength, MinLength } from "class-validator";

export class atualizarVendedor {
    @IsNotEmpty({ message: "O Nome do vendedor é inválido! " })
    @Matches(/^[a-zA-Z\u0020]+$/, { message: "O Nome  do vendedor  é inválido! " })
    @MaxLength(20, { message: "O Nome  do vendedor  é inválido! " })
    @IsOptional()
    nome: string;
    @IsNotEmpty({ message: "O Sobrenome  do vendedor   é inválido! " })
    @Matches(/^[a-zA-Z\u0020]+$/, { message: "O Sobrenome  do vendedor  é inválido! " })
    @MaxLength(20, { message: "O Sobrenome  do vendedor  é inválido! " })
    @IsOptional()
    sobrenome: string;
    @Matches(/^[0-9a-zA-Z\u0020\u005F\u0040\u002E]+$/, { message: "O Nome Comercial do vendedor  é inválido! " })
    @IsNotEmpty({ message: "O Nome Comercial do vendedor é inválido! " })
    @MaxLength(50, { message: "O Nome Comercial do vendedor  é inválido! " })
    @IsOptional()
    nomeComercial: string;
    @MinLength(8, { message: "O Senha do vendedor  é inválida! " })
    @MaxLength(12, { message: "O Senha do vendedor  é inválida! " })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/, { message: "O Senha do vendedor  é inválida! " })
    @IsOptional()
    senha: string;
}