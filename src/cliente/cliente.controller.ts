import { FacturaService } from './../factura/factura.service';
import { Controller, Get } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    public constructor(private readonly clienteService: ClienteService,
        private facturaController: FacturaService) { }

    @Get("get-all")
    public getClientes(): Promise<Cliente[]>{
        return this.clienteService.getClientes();
    }
}
