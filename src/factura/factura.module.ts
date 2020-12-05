import { ClienteService } from './../cliente/cliente.service';
import { ClienteController } from './../cliente/cliente.controller';
import { Cliente } from './../cliente/cliente.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaController } from './factura.controller';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';
import { Telefono } from 'src/telefono/telefono.entity';
import { TelefonoController } from 'src/telefono/telefono.controller';
import { TelefonoService } from 'src/telefono/telefono.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factura,
      Cliente,
      Telefono
    ])
  ],
  controllers: [FacturaController, ClienteController,TelefonoController],
  providers: [FacturaService, ClienteService,TelefonoService]
})
export class FacturaModule {}
