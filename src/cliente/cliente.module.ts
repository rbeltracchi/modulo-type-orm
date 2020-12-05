import { FacturaService } from './../factura/factura.service';
import { FacturaController } from './../factura/factura.controller';
import { Factura } from './../factura/factura.entity';
import { Cliente } from './cliente.entity';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefono } from 'src/telefono/telefono.entity';
import { TelefonoController } from 'src/telefono/telefono.controller';
import { TelefonoService } from 'src/telefono/telefono.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cliente,
      Factura,
      Telefono
    ])
  ],
  controllers: [ClienteController, FacturaController,TelefonoController],
  providers: [ClienteService, FacturaService,TelefonoService]
})
export class ClienteModule {}
