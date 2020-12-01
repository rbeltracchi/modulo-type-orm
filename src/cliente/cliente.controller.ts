import { Controller } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
    public constructor(private readonly clienteService: ClienteController) { }
}
