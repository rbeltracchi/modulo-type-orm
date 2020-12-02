import { FacturaService } from './../factura/factura.service';
import { FacturaController } from './../factura/factura.controller';
import { Factura } from './../factura/factura.entity';
import { Cliente } from './cliente.entity';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cliente,
      Factura
    ])
  ],
  controllers: [ClienteController, FacturaController],
  providers: [ClienteService, FacturaService]
})
export class ClienteModule {}
