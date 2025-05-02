import { Module } from '@nestjs/common';
import { ClienteModules } from './Cliente/cliente.module';
import { ProdutoModule } from './Produto/produto.module';
import { VendedorModule } from './Vendador/vendedor.module';


@Module({
  imports: [ClienteModules, ProdutoModule, VendedorModule],

})
export class AppModule { }
