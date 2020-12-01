import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaController } from './factura.controller';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factura
    ])
  ],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
