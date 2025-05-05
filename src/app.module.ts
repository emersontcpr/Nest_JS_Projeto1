import { Module } from '@nestjs/common';
import { ClienteModules } from './Cliente/cliente.module';
import { ProdutoModule } from './Produto/produto.module';
import { VendedorModule } from './Vendador/vendedor.module';
import { VendedorService } from './Vendador/Service/vendedor.service';
import { VendedorRepository } from './Vendador/Repository/vendedor.repository';


@Module({
  imports: [ClienteModules, ProdutoModule, VendedorModule]
})
export class AppModule { }
