import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FacturaDto } from './factura.dto';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';

@Controller('factura')
export class FacturaController {

    public constructor(private readonly facturaService: FacturaService) { }

    @Get("get-all")
    public getAllfacturasRaw(): Promise<Factura[]> {
        return this.facturaService.getAll();
    }
}
