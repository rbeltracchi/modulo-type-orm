import { Controller, Get } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    public constructor(private readonly productoService: ProductoService) { }

    @Get('productos/')
    getAllProductos() {
        return this.productoService.getAll();
    }
}
