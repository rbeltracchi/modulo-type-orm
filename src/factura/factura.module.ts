import { ClienteService } from './../cliente/cliente.service';
import { ClienteController } from './../cliente/cliente.controller';
import { Cliente } from './../cliente/cliente.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaController } from './factura.controller';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factura,
      Cliente
    ])
  ],
  controllers: [FacturaController, ClienteController],
  providers: [FacturaService, ClienteService]
})
export class FacturaModule {}
