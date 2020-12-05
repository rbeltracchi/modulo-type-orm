import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/cliente.entity';
import { Factura } from 'src/factura/factura.entity';
import { TelefonoController } from './telefono.controller';
import { Telefono } from './telefono.entity';
import { TelefonoService } from './telefono.service';

@Module({
  imports: [
  TypeOrmModule.forFeature([
    Cliente,
    Factura,
    Telefono
  ])
],
  controllers: [TelefonoController],
  providers: [TelefonoService]
})
export class TelefonoModule {}
