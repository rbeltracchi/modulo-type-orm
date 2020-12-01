import { Controller, Get } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    public constructor(private readonly clienteService: ClienteService) { }

    @Get("get-all")
    public getClientes(): Promise<Cliente[]>{
        return this.clienteService.getClientes();
    }
}
