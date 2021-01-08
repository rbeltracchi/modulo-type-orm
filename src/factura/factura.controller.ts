import { ClienteService } from './../cliente/cliente.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FacturaDto } from './factura.dto';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';
import { Cliente } from 'src/cliente/cliente.entity';

@Controller('factura')
export class FacturaController {

    public constructor(private readonly facturaService: FacturaService,
        private clienteService: ClienteService) { }

    @Get("get-all")
    public getAllfacturasRaw(): Promise<Factura[]> {
        return this.facturaService.getAll();
    }

    @Get("get-cliente/:facturaId")
    public getByFactura(@Param("facturaId") facturaId: number): Promise<Cliente>{
        return this.facturaService.getByFactura(facturaId);
    }
}
