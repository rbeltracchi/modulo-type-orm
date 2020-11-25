import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductoDTO } from './producto.dto';
import { Producto } from './producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    public constructor(private readonly productoService: ProductoService) { }

    @Get("get-all-raw")
    public getAllProductosRaw(): Promise<Producto[]> {
        return this.productoService.getAllRaw();
    }

    @Get("get-all")
    public getAllProductos(): Promise<Producto[]>{
        return this.productoService.getAll();
    }

    @Get(":id")
    public getProductoById(@Param('id') id: number): Promise<Producto>{
        return this.productoService.getById(id);
    }

    @Post("new-producto")
    createArticle(@Body() productoDto: ProductoDTO): Promise<Producto> {
        return this.productoService.addProduct(productoDto);
    }
}
