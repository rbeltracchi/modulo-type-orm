import { FacturaService } from './../factura/factura.service';
import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    public constructor(private readonly clienteService: ClienteService,
        private facturaController: FacturaService) { }

    @Post("get-all")
    public getClientes(@Body() token ): Promise<Cliente[]>{
        return this.clienteService.getClientes(token);
    }

    @Get(":id")
    public getByCliente(@Param("id") id): Promise<any[]>{
        return this.clienteService.getByCliente(id);
    }
}
